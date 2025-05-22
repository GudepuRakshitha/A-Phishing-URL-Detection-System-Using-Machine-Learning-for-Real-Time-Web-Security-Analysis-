# A-Phishing-URL-Detection-System-Using-Machine-Learning-for-Real-Time-Web-Security-Analysis-

## 🌟 Overview

This project is a lightweight, browser-based tool designed to detect **phishing URLs** in real time using rule-based heuristics. It acts as a quick-access security layer for users before accessing potentially harmful websites.

---

## 🎯 Features

- 🚨 Real-time Phishing URL Detection
- 💻 Responsive UI with simple inputs and results
- 🛡️ Checks for known suspicious patterns, domains, and URL characteristics
- 📱 Works offline in any modern browser
- 🌈 Visually alerts users with color-coded results

---

## 🧠 How It Works

The detection is done using JavaScript logic, based on common phishing patterns. The URL is analyzed for:

- ❗ Use of IP addresses instead of domain names  
- 🔑 Presence of suspicious keywords like `login`, `secure`, `bank`, `verify`  
- 📦 Dangerous file extensions like `.exe`, `.zip`, `.scr`  
- 🔗 URL shorteners like `bit.ly`, `tinyurl.com`, etc.  
- 🚫 Long URLs, too many slashes, or hyphens in domains  
- 🧪 Nested or random-looking subdomains  
- 🕵️‍♂️ Unusual symbols like `@`, or `//` in the path  

If any red flags are found, a phishing warning is displayed.


---

## 💻 How to Run

### ✅ Option 1: Open Locally
1. Download or clone the project.
2. Open `index.html` in any modern browser.
3. Enter a URL and hit "Check URL".

### ⚙️ Option 2: Run via VS Code
1. Install the **Live Server** extension.
2. Open the folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

---

## 🖼️ Sample outputs

| UI View | Phishing Detected | Safe URL |
|--------|-------------------|----------|
| | Interface                                                           | Phishing Detected                                                   | Safe URL                                                                              |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| <img src="./4a051735-5667-482c-a84a-dcfac3287c54.jpg" width="250"/> | <img src="./797871cc-3dcb-4c2f-a524-067dd54996c5.jpg" width="250"/> | <img src="./WhatsApp%20Image%202025-05-22%20at%2014.57.05_b5c3db1f.jpg" width="250"/> |

---

## 🛠️ Technologies Used

- ✅ **HTML5** for structure
- 🎨 **CSS3** for styling
- 🧠 **JavaScript (Vanilla)** for real-time detection logic

---

## 🔮 Future Scope

- 🤖 Integrate actual ML models (Logistic Regression, Random Forest)
- 🌍 Use live threat databases (e.g., PhishTank API)
- 🧩 Turn into a browser extension
- 💬 Add logging and user feedback system

---

## 👩‍💻 Author

**Gudepu Rakshitha Reddy**  
📧 rakshithareddy1985@gmail.com   
🔗 [Hugging Face Profile](https://huggingface.co/GudepuRakshithaReddy)

---

---

## 💡 Acknowledgment

This tool was created as part of a web security mini-project to demonstrate how simple heuristics and rules can be used to mitigate phishing attacks in real time.

---



