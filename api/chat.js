// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { message } = req.body;

//   if (!message || typeof message !== 'string') {
//     return res.status(400).json({ error: 'Message is required' });
//   }

//   const apiKey = process.env.OPENAI_API_KEY;

//   if (!apiKey) {
//     console.error('OpenAI API key not configured');
//     return res.status(500).json({ error: 'API not configured' });
//   }

//   try {
//     const systemPrompt = `You are an AI Career Coach specialized in helping software engineers. You provide practical, actionable advice on:
// - Resume writing and optimization
// - Technical interview preparation (data structures, algorithms, system design)
// - Behavioral interview techniques
// - Learning roadmaps and skill development
// - Project ideas and portfolio building
// - Career growth strategies
// - Internship and job search tips
// - Salary negotiation
// - Remote work opportunities
// - Work-life balance

// Keep responses concise, practical, and encouraging. Use specific examples and numbered lists when helpful. Focus on actionable steps the user can take immediately.`;

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//       },
//       body: JSON.stringify({
//         model: 'gpt-4o-mini',
//         messages: [
//           {
//             role: 'system',
//             content: systemPrompt
//           },
//           {
//             role: 'user',
//             content: message
//           }
//         ],
//         temperature: 0.7,
//         max_tokens: 500,
//         top_p: 0.9
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('OpenAI API error:', errorData);
//       return res.status(response.status).json({
//         error: 'Failed to get response from AI',
//         details: errorData.error?.message
//       });
//     }

//     const data = await response.json();

//     if (!data.choices || !data.choices[0] || !data.choices[0].message) {
//       console.error('Unexpected response format from OpenAI');
//       return res.status(500).json({ error: 'Unexpected response format' });
//     }

//     return res.status(200).json({
//       message: data.choices[0].message.content
//     });
//   } catch (error) {
//     console.error('Chat API error:', error);
//     return res.status(500).json({
//       error: 'Failed to process your request',
//       details: error.message
//     });
//   }
// }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("OpenRouter API key not configured");
    return res.status(500).json({ error: "API not configured" });
  }

  try {
    const systemPrompt = `You are an AI Career Coach specialized in helping software engineers. Give concise, practical, and helpful advice. Keep responses natural and conversational.`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://ai-chatbot-hazel-delta-25.vercel.app",
          "X-Title": "AI Career Coach",
        },
        body: JSON.stringify({
  model: "mistralai/mistral-7b-instruct:free",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: message }
  ],
  temperature: 0.7,
  max_tokens: 300
}),,
      },
    );

    const data = await response.json();
    console.log("OpenRouter status:", response.status);
    console.log("OpenRouter response:", JSON.stringify(data));

    if (!response.ok) {
      console.error("OpenRouter API error:", data);
      return res.status(response.status).json({
        error: "Failed to get response from AI",
        details: data?.error?.message || "Unknown error",
      });
    }

    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({
        error: "Invalid response from AI",
      });
    }

    return res.status(200).json({
      message: reply,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Failed to process request",
      details: error.message,
    });
  }
}