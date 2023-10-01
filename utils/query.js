const fetch = require('node-fetch');

async function query(data) {
  const response = await fetch(
      "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5",
      {
        headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

  const result = await response.json();

  return result;
}

query({ "inputs": "Can you please let us know more details about your " }).then((response) => {
  console.log(JSON.stringify(response));
});