// components/Terminal.tsx

import { useState } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newOutput = [...output, `> ${command}`];
      setOutput(newOutput);
      setCommand('');

      // Call API to execute the command
      await runCommand(command);
    }
  };

  const runCommand = async (command: string) => {
    const response = await fetch('/api/runcommand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command }),
    });

    const data = await response.json();
    const newOutput = [...output, data.output];
    setOutput(newOutput);
  };

  return (
    <div className="terminal w-full max-w-4xl p-6 bg-black/60 rounded-lg flex flex-col">
      <div className="terminal-output flex-1 p-2 overflow-y-auto font-mono text-lg text-white">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <input
        value={command}
        onChange={handleCommandChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="terminal-input w-full p-2 mt-2 bg-transparent border-none text-lg text-white focus:outline-none"
        placeholder="Type your command..."
        autoFocus
      />
    </div>
  );
};

export default Terminal;
