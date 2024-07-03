# Complexity Detector for Leetcode Powered by Gemini

## Getting Started 

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your system.
- Obtain an API key for Google Gemini from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Fork and Clone the Repository**

- Fork the repository and clone it to your system
 `git clone https://github.com/itsnileshgosavi/Complexity-Detector.git`

- Change Directory to Complexity detector using 
    `cd Complexity Detector`

2. Install the dependencies 
- `npm install` or `npm i`

3. Add API key

- In order to use the extension you will require an api key for Google Gemini obtain the key from [Google AI Studio](https://aistudio.google.com/app/apikey) for free.

- Add your API key in the popup.js file as by creating a variable `const API_KEY = "your key"` or import it from the file `import { API_KEY } from /env`

4. Run `npx webpack --mode production` to generate build file.

### Installing the Extension

- In order to install an unpacked extension, you would need to enable developer mode in chrome extension page.
- Go to `chrome://extensions/` or open extensions settings from the menu.
- Enable Developer mode and click on *Load Unpacked* 
- Navigate to the folder containing cloned repository and select it.
- That's it the extension is installed.

## Usage

- Go to leetcode problem page and click on the extension icon
- Extension will automatically fetch the code from the code editor on the page
- Click on the button in the extension to get the AI powered analysis of the code
- You can also customise the prompt in the `popup.js` file to get different response as per your need. 

## Contrubuting
 
1. Fork the Project
2. Create your Feature Branch
 - If you have made any changes to the popup.js file make sure to run `npx webpack --mode production` to create a build.
3. Commit your Changes
 - `git commit -m 'Add some AmazingFeature`
4. Push to the Branch
 - `git push origin feature/AmazingFeature`

5. Open a Pull Request
 
### License
- Distributed under the MIT License.

### Contact
- [Contact Me](https://nileshgosavi.tech/#contact)
- [Email me](mailto:nbgosavi5@gmail.com)
