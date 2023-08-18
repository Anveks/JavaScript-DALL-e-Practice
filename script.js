
const API_KEY = "your-api-key-here";

document.getElementById('submitBtn').addEventListener('click', async (e) => {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const size = document.getElementById("size").value;
  const n = document.getElementById("number").value;

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "prompt": prompt,
      "n": +n ?? 1,
      "size": size ?? "512x512"
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', options);
    const data = await response.json();
    console.log(data);
  } catch(err){
    console.log(err);
  }
  
});
