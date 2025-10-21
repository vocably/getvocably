import { config } from 'dotenv-flow';
import 'zx/globals';

config();

const BASE = 'https://api.openai.com/v1';

const fileId = process.argv[2];

const getFileRes = await fetch(`${BASE}/files/${fileId}/content`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getFileRes.ok) throw new Error(await getFileRes.text());
const fileContents = (await getFileRes.text())
  .split('\n')
  .map((jsonString) => {
    try {
      const json = JSON.parse(jsonString);
      return json;
    } catch (e) {
      console.error(jsonString);
    }

    return null;
  })
  .filter((r) => r !== null && r.custom_id !== '')
  .map((response) => ({
    customId: response.custom_id,
    content: response?.response?.body.choices[0].message.content,
  }));

console.log(fileContents);
