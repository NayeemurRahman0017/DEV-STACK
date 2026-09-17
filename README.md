# 🚀 Dev Stack Builder

## 📌 Project Name

**Dev Stack Builder**

## 📝 Description

Dev Stack Builder is a simple and interactive React application where users can browse different development technologies and build their own personalized technology stack. Users can dynamically add or remove technologies and see their selected stack in real time.


## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Toastify**
* **JSON**

## ✨ Features

* 🔍 Browse different development technologies
* 🧩 Build a personalized technology stack
* ➕ Add and remove technologies dynamically

# ❓ React Questions

## 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript/TypeScript.

React uses JSX because it makes UI code easier to write, read, and understand. It also allows us to combine the UI structure and JavaScript logic in the same component.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only and cannot be directly changed by the child.

**State** is data managed inside a component. State can change over time, and when it changes, React re-renders the componen

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React functional component.

In this project, I used `useState` to store the technologies selected by the user in the stack.

For example:

```tsx
const [stack, setStack] = useState<ITechList[]>([]);
```

Here, `stack` contains the selected technologies and `setStack` is used to update the stack.


## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component, such as fetching data, interacting with APIs, or working with external resources.

I need to used `useEffect` to load the technology data from the JSON file when the component loads. This allows the application to get the technology information and display it on the page.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

When the list changes, React uses the `key` to understand which item was added, removed, or updated. This helps React update the UI efficiently.

## 6. What is conditional rendering?

Conditional rendering means displaying different UI elements depending on a condition.

If the stack is empty, one message is displayed; otherwise, another message is displayed.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

A child can communicate back to the parent by receiving a **callback function** through props and calling that function when an action happens.


## 👨‍💻 Author

**MD. NAYEEMUR RAHMAN BHUIYAN NAYEEM**

Built with ❤️ using React, TypeScript, and Tailwind CSS.

# React + TypeScript + Vitez

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)


    
