import './style.css'
import OpenAI from 'openai'
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const image = await openai.images.generate({
  model: 'dall-e-3',
  // n: 3, // only on dall-e-2
  // prompt: "A colorful image of an astronaut cycling on the moon, with a vibrant Earth in the background. Include glowing tire tracks, colorful alien plants, and crystals on the lunar surface"
  prompt: "A robot astronaut riding a bicycle on the moon"
});
console.log(image.data);

const img = document.createElement('img')
img.src = image.data[0].url
img.alt = image.data[0].revised_prompt

document.getElementById('app').appendChild(img)
