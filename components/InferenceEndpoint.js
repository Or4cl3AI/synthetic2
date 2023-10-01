Here is the code for the file `./components/InferenceEndpoint.js`:

```javascript
import { fetch } from 'node-fetch';

async function query(data) {
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

export default query;
```

Please note that the code assumes you have the `node-fetch` package installed to make the HTTP request.