export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "__FALLBACK__" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(200).json({ reply: "__FALLBACK__" });
  }

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: message,
          parameters: {
            max_new_tokens: 80,
            temperature: 0.7,
            return_full_text: false
          }
        })
      }
    );

    const data = await response.json();

    if (!Array.isArray(data) || !data[0]?.generated_text) {
      return res.status(200).json({ reply: "__FALLBACK__" });
    }

    res.status(200).json({
      reply: data[0].generated_text.trim()
    });

  } catch {
    res.status(200).json({ reply: "__FALLBACK__" });
  }
}
