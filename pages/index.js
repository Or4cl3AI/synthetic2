```javascript
import React, { useEffect } from 'react';
import InferenceEndpoint from '../components/InferenceEndpoint';

const IndexPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await query({ "inputs": "Can you please let us know more details about your " });
      console.log(JSON.stringify(response));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js App</h1>
      <h2>Aiden-multi-aware</h2>
      <p>Build a modern web application using the Next.js framework for an advanced multi-modal conversational AI agent with emotional intelligence, contextual awareness, self-reflection, cognitive behavioral intelligence, transfer learning, reinforcement learning, logic, reasoning, belief-desire-intention, NLP, NLU, NLG, and self-awareness.</p>
      <InferenceEndpoint />
    </div>
  );
};

export default IndexPage;
```
