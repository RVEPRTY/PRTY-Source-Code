export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "__FALLBACK__" });
  }

  const { message } = req.body;
  if (!message || typeof message !== "string") {
    return res.status(200).json({ reply: "__FALLBACK__" });
  }

  // Safety check: env var must exist
  if (!process.env.HUGGINGFACE_API_KEY) {
    return res.status(200).json({ reply: "__FALLBACK__" });
  }

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/gpt2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: message,
          parameters: {
            max_new_tokens: 80,
            temperature: 0.7,
          },
          options: {
            wait_for_model: true, // 🔑 THIS IS IMPORTANT
          },
        }),
      }
    );

    const data = await response.json();

    // Hugging Face sometimes returns an error object instead of text
    if (
      !data ||
      data.error ||
      !Array.isArray(data) ||
      !data[0]?.generated_text
    ) {
      return res.status(200).json({ reply: "__FALLBACK__" });
    }

    // Remove the user's prompt from the output
    const cleaned = data[0].generated_text
      .replace(message, "")
      .trim();

    if (!cleaned) {
      return res.status(200).json({ reply: "__FALLBACK__" });
    }

    return res.status(200).json({ reply: cleaned });

  } catch (err) {
    return res.status(200).json({ reply: "__FALLBACK__" });
  }
}
