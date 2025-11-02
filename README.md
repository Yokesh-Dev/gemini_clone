---

# 🪐 Gemini Clone

A sleek AI-powered chat application built with **React** and **Google Gemini API**. Gemini Clone allows users to interact with an AI assistant, with a modern, responsive interface featuring a sidebar, recent chats, and animated responses.

---

## 🔥 Features

* Interactive AI chat powered by **Google Gemini API**
* Typing animation for AI responses
* Recent prompts tracking & reloading
* New chat creation
* Responsive, clean UI with cards and sidebar navigation
* Safe & filtered responses using **Gemini safety settings**

---

## 🛠 Tech Stack

* **Frontend:** React 19, Vite, CSS
* **State Management:** React Context API
* **AI Integration:** Google Gemini API (v2.5 streaming)
* **Linting & Dev Tools:** ESLint, @vitejs/plugin-react
* **Icons & Assets:** Custom SVG & image icons

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gemini-clone.git

# Navigate to project folder
cd gemini-clone

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your app live.

---

## ⚙ Usage

1. **Start a new chat** using the sidebar
2. **Enter a prompt** in the bottom input box
3. **View animated AI response** with formatted text
4. **Click recent prompts** in the sidebar to reload past interactions
5. **Enjoy a seamless, interactive experience!**

---

## 🧩 Architecture & Flow

```text
🧑 User
   │
   ▼
💬 Main Component (Input Box)
   │
   ▼
🗂 Context API ──> onSent(prompt)
   │
   ├─ Updates 📌 recentPrompt
   ├─ Adds 📝 prevPrompt array
   ├─ Sets 🔹 showResult = true
   │
   ▼
🤖 runChat(prompt) → Gemini API
   │
   ├─ Streams response ⏩
   ├─ Formats text (**bold**, *line breaks*)
   │
   ▼
⌛ delayPara(index, nextWord) → Animates typing
   │
   ▼
🖥 Main Component → Display AI Response
   │
   ▼
🧑 User sees formatted result
```

**Sidebar Interaction 🗂️:**

```text
👆 User clicks "Recent Prompt"
   │
   ▼
🔄 loadPrompt(prompt) → Context API → onSent(prompt)
   │
   ▼
🖥 Main Component updates → Displays AI response
```

---

## 💡 Key Concepts

* **React Context API:** Centralized global state management for prompts, input, and AI responses.
* **Async / Await:** Handles streaming API calls to Gemini with error handling.
* **Conditional Rendering:** Dynamic UI depending on whether AI response is shown or greeting/cards.
* **Typing Animation:** `delayPara()` simulates AI typing effect word by word.
* **Responsive UI:** Sidebar toggle, card layout, and mobile-friendly design.
* **Safety Filters:** Gemini safety settings prevent harmful content.

---

## 🖼 Screenshots

<img width="1580" height="737" alt="image" src="https://github.com/user-attachments/assets/2929836b-e706-4a57-ac3d-c85e28085617" />


---

## 📁 Folder Structure

```
gemini-clone/
│
├─ src/
│  ├─ assets/          # Icons and images
│  ├─ components/      # Sidebar, Main
│  ├─ context/         # React Context Provider
│  ├─ config/          # Gemini API integration
│  ├─ App.jsx          # Main component
│  └─ index.jsx        # React entry point
│
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## ⚠️ Notes

* Gemini API requires a valid **API key**. Keep it safe!
* The AI can make mistakes. Double-check generated content.
* Adjust **maxOutputTokens** and other config parameters in `runChat.js` for your use case.

---

## 🏆 License

MIT License © yokesh-dev]

---

