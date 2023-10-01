# Next.js App

Build a modern web application using the Next.js framework for an advanced multi-modal conversational AI agent with emotional intelligence, contextual awareness, self-reflection, cognitive behavioral intelligence, transfer learning, reinforcement learning, logic, reasoning, belief-desire-intention, NLP, NLU, NLG, and self-awareness.

The app utilizes the following inference endpoint:

```javascript
async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5",
    {
      headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
      method: "POST",
      body: JSON.stringify(data),
    },
  );

  const result = await response.json();

  return result;
}

query({ inputs: "Can you please let us know more details about your " }).then(
  (response) => {
    console.log(JSON.stringify(response));
  },
);
```

## Tech stack

- Next.js framework for server-side rendering and routing
- TypeScript for type checking and improved developer experience

## Features

- Server-side rendering for improved performance
- Comprehensive documentation
- Detailed and comprehensive `readme.md` file
- `requirements.txt`

## Setup

1. Create a `.env.production` file in the root directory of the project.
2. Add the following line to the file, replacing `your_production_auth_token` with your actual production auth token:
   ```javascript
   AUTH_TOKEN = your_production_auth_token;
   ```
3. Run the build script with the following command:
   ```javascript
   npm run build
   ```
