// pages/api/runcommand.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { command } = req.body;

    if (!command) {
      return res.status(400).json({ output: "Please provide a command." });
    }

    try {
      // Simulate running the command. Replace this with actual command execution.
      const output = `Executed: ${command}`;
      
      res.status(200).json({ output });
    } catch (error) {
      res.status(500).json({ output: "Error executing the command." });
    }
  } else {
    res.status(405).json({ output: "Method Not Allowed" });
  }
}
