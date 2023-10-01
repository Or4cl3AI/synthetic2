```javascript
// ./pages/api/inference.js

import { query } from "../../utils/query";

export default async function handler(req, res) {
  const data = { inputs: "Can you please let us know more details about your " };

  try {
    const response = await query(data);
    console.log(JSON.stringify(response));
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
```