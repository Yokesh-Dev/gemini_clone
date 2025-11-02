//API KEY
//npm install @google/genai
//Used Google AI studio
//API - KEY = AIzaSyBOVW91GoCAKNHyA9buPZy3TEv43ZdqRbw

// npm install @google/genai

import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

const MODEL_NAME = "gemini-2.5-flash";
const API_KEY = import.meta.env.REACT_APP_API_KEY; // visible for testing

async function runChat(prompt) {
  const genAI = new GoogleGenAI({ apiKey: API_KEY });
  const model = MODEL_NAME;

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  try {
    // Gemini v2.5 uses a streaming response model
    const responseStream = await genAI.models.generateContentStream({
      model,
      config: generationConfig,
      safetySettings,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    let finalText = "";

    for await (const chunk of responseStream) {
      const part = chunk?.candidates?.[0]?.content?.parts?.[0];
      if (part?.text) {
        finalText += part.text;
      }
    }

    return finalText.trim();
  } catch (error) {
    console.error("Gemini API error:", error);
    return "⚠️ Error contacting Gemini API.";
  }
}

export default runChat;

// Test Example
// const prompt = "Hello Gemini! Tell me a fun fact about space.";
// runChat(prompt).then(console.log).catch(console.error);

/* This is a multi-line comment 

import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

const MODEL_NAME = "gemini-2.0-flash";
const API_KEY = "AIzaSyBOVW91GoCAKNHyA9buPZy3TEv43ZdqRbw";

async function runChat(prompt) {
  const genAI = new GoogleGenAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;
*/
