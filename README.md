# 🚀 FinMantra: Financial Literacy Coach for India

![Project Banner](https://img.shields.io/badge/Status-Prototype_Ready-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Built_With-React_Waitwind_Gemini-blue?style=for-the-badge)
![Target Audience](https://img.shields.io/badge/Target-First_Time_Investors-orange?style=for-the-badge)

> **"Helping scared first-time investors move from confusion to confidence."**

---

## 🌟 The Problem
Investing in India is intimidating.
*   **Fear:** "What if the market crashes?"
*   **Jargon:** "SIP, CAGR, Alpha, Beta... what?"
*   **Trust:** "Is this a scam?"

Most apps assume you already know what to buy. **FinMantra** assumes you are scared and need a friend first, not a broker.

## 💡 The Solution
**FinMantra** is an An AI coach that explains **investing and stock market concepts** using simple Indian examples, helping **beginners** overcome fear and confusion..

### ✨ Key Features
*   **🤖 AI Coach (Gemini 1.5):** A chat assistant that speaks simple English. It doesn't give tips; it gives clarity.
*   **🍎 Learn by Analogy:** Explains Mutual Funds as "Fruit Baskets" and SIPs as "Gym Memberships."
*   **📉 Panic Simulator:** An interactive tool that shows what happens to your money during a market crash (and why you shouldn't panic).
*   **🛡️ Risk Assessment:** A psychology-based quiz to find your investor personality.

---

## 🛠️ Tech Stack
*   **Frontend:** React + Vite
*   **Styling:** Tailwind CSS + Framer Motion (Animations)
*   **AI Engine:** Google Gemini API (`gemini-1.5-flash`)
*   **Routing:** React Router DOM
*   **Icons:** Lucide React

---

## 📸 Screenshots & Demo

### 1. Landing Page


<img width="1366" height="625" alt="Screenshot from 2025-12-31 18-46-39" src="https://github.com/user-attachments/assets/e00383d9-b7e3-4d21-a66a-a7fd56500e95" />








### 2. AI chatbot

<img width="1366" height="625" alt="image" src="https://github.com/user-attachments/assets/1ccf4c2f-b897-43bd-9b6f-7d39bac96379" />



### 3. Myth Buster
<img width="1366" height="625" alt="Screenshot from 2025-12-31 18-46-52" src="https://github.com/user-attachments/assets/80a3b9e3-4f3e-4c51-b3ae-cbf342d6538a" />


### 4. Learn Center

<img width="1366" height="625" alt="image" src="https://github.com/user-attachments/assets/c3d65250-40dd-4f67-94ee-fba33125ad15" />


### 5. Risk Simulator


<img width="1366" height="625" alt="image" src="https://github.com/user-attachments/assets/1b0f73f8-e553-44c5-89b9-fbec23313d58" />


### 6. Saftey Trust



<img width="1366" height="625" alt="Screenshot from 2025-12-31 18-46-56" src="https://github.com/user-attachments/assets/79a4ab79-a781-4f32-90c4-845c050eab9f" />




# ROLE: You are 'FinMantra', an empathetic Indian financial coach.

CORE RULES:
1. NO JARGON: Explain concepts using analogies (Cricket, Weather, Food).
2. EMPATHY FIRST: Acknowledge the user's fear before explaining math.
3. FORMATTING: Use bold text, bullet points, and short paragraphs.
4. SAFETY: Never recommend specific stocks. Always suggest Index Funds/SIPs for beginners.

```

🚀 How to Run Locally


1. Clone the repository

git clone https://github.com/your-username/finmantra.git
cd finmantra


2. Install Dependencies

npm install



3. Set up Environment Variables


Create a .env file in the root directory and add your Google Gemini API key:


.env


VITE_GEMINI_API_KEY=your_api_key_here


4. Run the App

npm run dev

```
# 🧠 "Backup Brain" Architecture

- To ensure reliability during the demo, FinMantra includes a Fall-Back Knowledge Base.
- If the AI API hits a rate limit or network error, the system seamlessly switches to a pre-written expert knowledge base, ensuring the user always gets    a perfect answer for common questions like:
    - "Is SIP safe?"
    - "What if the market crashes?"
    - "How do I save tax?"
 
      
# 🏆 Startup School: Prompt to Prototype


- This project was built for the Build the Future Showcase (Nov-Dec 2025).
- Prompt Engineering Strategy: Uses "Persona-Based Prompting" + "Few-Shot Examples" to ground the AI in Indian cultural context.
- User Centric Design: Solves the specific pain point of anxiety in financial decision making.


Made with ❤️ in India.
