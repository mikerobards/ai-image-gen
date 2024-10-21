import './style.css'
import OpenAI from 'openai';

// Create an OpenAI instance
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,  // Use Vite's environment variable
  dangerouslyAllowBrowser: true,
});

const imageResponse = await fetch('/mission1.png');
const maskResponse = await fetch('/mask.png');

console.log(imageResponse)

const image = await openai.images.edit({

  model: "dall-e-2",
  image: imageResponse,
  mask: maskResponse,
  prompt: "People running a road race. Ahead of the man in the gray shirt, in the lower left corner of the image, there is a small leprechaun running ahead of him, in the same direction.",
  n: 1,
  size: "1024x1024"
});
console.log(image.data)
const image_url = image.data[0].url;


// const image = await openai.images.generate({
//   model: 'dall-e-3',
//   // n: 3, // only on dall-e-2
//   // prompt: "A colorful image of an astronaut cycling on the moon, with a vibrant Earth in the background. Include glowing tire tracks, colorful alien plants, and crystals on the lunar surface"
//   // prompt: "A robot astronaut riding a bicycle on the moon"
//   prompt: "An expressionist painting showing a figure standing on a bridge, clutching their face in a state of panic or despair, with a wide-open mouth that seems to be emitting a scream. The background features a tumultuous sky with swirling patterns of red, orange, and blue, which echo the turmoil of the central figure. The setting appears to be a long bridge with railing, receding into the distance where two figures can be seen in the background, and a body of water below the bridge reflects the swirling patterns of the sky. The colors are bold and the brushwork is loose and fluid, conveying a strong sense of emotion and psychological intensity.", response_format: "b64_json"
// });
// console.log(image.data);

const img = document.createElement('img')
img.src = image_url
img.alt = "People running a road race with a leprechaun running ahead of them"
// img.alt = image.data[0].revised_prompt

document.getElementById('app').appendChild(img)

// document.body.innerHTML = `<img src="${image.data[0].url}" alt="A curious hedgehog exploring a garden">`;
// document.body.innerHTML = `<img src="data:image/png;base64,${image.data[0].b64_json}" alt="AI-generated-image">`;

