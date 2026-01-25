export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Only POST allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(200).json({ reply: "Say something first." });
    }

    const response = await fetch(
      "https://prty-ai.luisofficialbusiness.workers.dev",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      }
    );

    const data = await response.json();

    return res.status(200).json({
      reply: data?.reply || "PRTY AI is tired rn 😴"
    });

  } catch {
    return res.status(200).json({ reply: "PRTY AI is tired rn 😴" });
  }
}
