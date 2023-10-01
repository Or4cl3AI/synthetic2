import React from 'react';

const IndexPage = () => {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>Build a modern web application using the Next.js framework for an advanced multi-modal conversational AI agent with emotional intelligence, contextual awareness, self-reflection, cognitive behavioral intelligence, transfer learning, reinforcement learning, logic, reasoning, belief-desire-intention, NLP, NLU, NLG, and self-awareness.</p>
      <p>Utilize the inference endpoint:</p>
      <pre>
        {`async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ "inputs": "Can you please let us know more details about your " }).then((response) => {
  console.log(JSON.stringify(response));
});`}
      </pre>
      <h2>Tech Stack</h2>
      <ul>
        <li>Next.js framework for server-side rendering and routing</li>
        <li>TypeScript for type checking and improved developer experience</li>
      </ul>
      <h2>Features</h2>
      <ul>
        <li>Server-side rendering for improved performance</li>
        <li>Comprehensive documentation</li>
        <li>Detailed and comprehensive readme.md file</li>
        <li>requirements.txt</li>
      </ul>
    </div>
  );
};

export default IndexPage;