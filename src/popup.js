const { GoogleGenerativeAI } = require("@google/generative-ai");
import { API_KEY } from "./env";
import { Marked } from "marked";
let marked = new Marked({ gfm: true, breaks: true, smartLists: true, smartypants: true });
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});
const button = document.getElementById('getCode');
const gemimg = document.getElementById('geminiimg');
async function getGenerativeAIResponse(prompt) {
  try {
    button.disabled=true;
    button.style.backgroundColor="grey";
    gemimg.classList.add('loading');
    const result = await model.generateContent(prompt);
    const response = result.response;
    return  response.text();
    
  } catch (error) {
    document.getElementById('Display').textContent = "Error getting response from Generative AI.";
  }finally{

    button.disabled=false;
    button.style.backgroundColor="black";
    gemimg.classList.remove('loading');
  }   
}
document.addEventListener('DOMContentLoaded', () => {
  // get the url in the current tab
  const tab = chrome.tabs.query({ active: true, currentWindow: true });
  tab.then((tabs) => {
    const url = tabs[0].url;
    if (!url.includes('leetcode.com')) {
      button.disabled = true;
      button.style.backgroundColor = "grey";
      document.getElementById('Display').textContent = "Extension only works on leetcode.com.";
    } else {
      button.disabled = false;
      button.style.backgroundColor = "black";
    }
  });
})

  
button.addEventListener('click', async () => {

    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true }); // get the active tab
      const response = await chrome.tabs.sendMessage(tabs[0].id, { action: "getCode" });//send a message to the content script
  
      if (response && response.code) {
        let prompt = `Provide a time and space complexity of the following code snippet. limit the response to 100 words. Code: ${response.code}`;
        let genres = await getGenerativeAIResponse(prompt);
        let html = marked.parse(genres);
        document.getElementById('Display').innerHTML = html;
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
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });//get the active tab
    
      if (tabs[0].url.includes('leetcode.com/problems')){ 
        await chrome.tabs.sendMessage(tabs[0].id, { action: 'runFunction' });//send message to active tab to run the function
        
      }else{
        document.getElementById('Display').textContent = "Extension only works on leetcode problem page.";}
  
    } catch (error) {
      console.log("Error injecting content script or sending runFunction message:", error);
    }
  });
  


  
 
 

