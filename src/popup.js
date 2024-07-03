const { GoogleGenerativeAI } = require("@google/generative-ai");
import { API_KEY } from "./env";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const button = document.getElementById('getCode');
const gemimg = document.getElementById('geminiimg');
async function getGenerativeAIResponse(prompt) {
    button.disabled=true;
    button.style.backgroundColor="grey";
    gemimg.classList.add('loading');
  const result = await model.generateContent(prompt);
  const response = await result.response;
  button.disabled=false;
  button.style.backgroundColor="black";
  gemimg.classList.remove('loading');
   return await response.text();
}

  
button.addEventListener('click', async () => {

    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const response = await chrome.tabs.sendMessage(tabs[0].id, { action: "getCode" });
  
      if (response && response.code) {
        let prompt = `Provide a time and space complexity analysis of the following code also provide explaination. limit the response to 50 words: ${response.code}`;
        let genres = await getGenerativeAIResponse(prompt);
        console.log(genres);
        document.getElementById('Display').textContent = genres;
      } else {
        document.getElementById('Display').textContent = "No code found. Please try again.";
      }
    } catch (error) {
      console.error("Error retrieving code or generating response:", error);
      document.getElementById('Display').textContent = "An error occurred. Please try again.";
    }
  });

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    
      // Send a message to the content script to run the function
      await chrome.tabs.sendMessage(tabs[0].id, { action: 'runFunction' });
  
    } catch (error) {
      console.error("Error injecting content script or sending runFunction message:", error);
    }
  });
  


  
 
 

