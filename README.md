# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React Searchable List Component

A high-performance, customizable, and accessible searchable dropdown component built with React and Tailwind CSS. This component was developed as a technical assessment for the role at Makyo.

## 🚀 Live Demo

* **Deployment URL:** [https://searchproject-3gsam8s5w-misbagas-projects.vercel.app/]
* **Storybook URL:** [http://localhost:6006/?path=/docs/components-searchablelist--docs]

---

## ✨ Features

### 1. Searchable Dropdown

Integrated search functionality that allows users to filter through long lists of options instantly.

### 2. Portal Support

Supports `ReactDOM.createPortal` to render the dropdown menu at the end of the `document.body`. This ensures the menu is never clipped by containers with `overflow: hidden` or lower `z-index`.

### 3. Selection Modes

* **Single Selection:** Standard dropdown behavior.
* **Multiple Selection:** Allows users to select multiple items with integrated tag/chip rendering.

### 4. Highly Customizable

* **Toggle Features:** Easily enable or disable search, footer, or selection limits via props.
* **Option Rendering:** Custom render functions allow you to control exactly how items look in the list.
* **Z-Index Compatible:** Designed to work seamlessly in layouts with high `z-index` requirements (>1000).

### 5. Tech Stack

* **React:** Core UI library.
* **Tailwind CSS:** For lightweight, utility-first styling.
* **Storybook:** For isolated component development and testing.
* **Minimal Dependencies:** Built with a focus on small bundle size and high performance.

---

## 📦 Installation & Setup

To use this component as a dependency in your Create React App (CRA) or Vite project, add it via GitHub:

```json
"dependencies": {
  "react-searchable-list": "git+https://github.com/misbagas/react-searchable-list.git"
}

```

### Development Setup

1. **Clone the repository:**
```bash
git clone https://github.com/misbagas/react-searchable-list.git
cd react-searchable-list

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run Storybook:**
```bash
npm run storybook

```



---

## 🛠 Usage Examples

### Basic Single Select

```jsx
<SearchableList 
  options={['React', 'Vue', 'Angular']} 
  multiple={false} 
  searchable={true} 
/>

```

### Multiple Select with Portal

```jsx
<SearchableList 
  options={frameworks} 
  multiple={true} 
  usePortal={true} 
  placeholder="Select Frameworks..."
/>

```

---

## 📮 Submission Details

* **Candidate:** [Misbah Bagaskara Purwanto]
* **Repository:** [https://github.com/misbagas/react-searchable-list](https://www.google.com/search?q=https://github.com/misbagas/react-searchable-list)

---
>>>>>>> 33d201874361ab2b1eab4154b8e975e74f74a1b7
