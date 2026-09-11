
#  DevStack

An interactive web workspace for developers to discover, organize, and assemble their ideal software stack across frontend, backend, databases, and DevOps tools.


##  About The Project

**DevStack** is a modern, responsive web application engineered to help software engineers discover, compare, and assemble their ideal technology stack. By categorizing industry-standard tools across Frontend, Backend, Databases, Languages, DevOps, and Tooling, DevStack eliminates tech analysis paralysis with an intuitive, interactive workspace.



##  Built With

* **Core Framework:** React 18 with Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** React Icons (`react-icons`)
* **Feedback Engine:** React-Toastify (`react-toastify`)


## Key Features

* **Interactive Stack Builder & Live Sidebar:** Seamlessly explore categorized development tools and build your personalized tech stack in a dedicated workspace sidebar with real-time state tracking.
* **Smart Duplicate Prevention & Toast System:** Built-in safeguards prevent redundant selections, triggering instant, actionable alert notifications for adding, removing, and wiping the workspace clean.
* **Responsive Architecture & Async Loading:** Optimized for all screen sizes with a mobile navigation drawer, fluid grid layouts, and graceful loading spinner states for asynchronous data ingestion.


## Questions & Answers 

### 1. What is JSX, and why is it used in React?
* **In simple words:** JSX looks like regular HTML, but it is written directly inside JavaScript.
* **Why we use it:** Without JSX, writing UI in plain JavaScript using methods like `document.createElement()` takes too much time and code. JSX lets us write the structure of our website directly inside our React components, making it very clean and easy to read.

---

### 2. What is the difference between props and state?
* **Props:** Data passed from a parent component down to a child component. Props are read-only, meaning the child cannot change them.
* **State:** Internal data created and managed inside the component itself. When a user clicks a button or types something, the state updates and the screen re-renders automatically.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
* **What it does:** `useState` helps a component store and remember information that changes during user interaction.
* **Where I used it:**
  * In `App.tsx`: To store the list of technologies (`techData`) and track when data is loading (`loading`).
  * In `Technology.jsx`: To save items added to the sidebar list (`selectedStack`).
  * In `Nav.jsx`: To toggle the mobile menu drawer open and closed (`isOpen`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
* **What it does:** `useEffect` tells React to run some side work (like fetching data from a server or file) outside of the normal render flow.
* **Why we needed it:** Fetching `Data.json` takes time. If we fetch directly inside the component body, React will fetch repeatedly on every render in an endless loop. Putting it inside `useEffect` with an empty array `[]` ensures the data loads only once when the page first opens.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
* React needs an easy way to know which item in a list changed, got added, or was removed.
* If we do not give each item a unique `key` (like `item.id`), React re-draws the entire list every time something changes. A unique key tells React exactly which card to update without touching the rest.

---

### 6. What is conditional rendering? Show one place you used it.
* **In simple words:** Showing different elements on the screen depending on whether a condition is true or false.
* **Project Example:** In the sidebar, if no technologies are selected, we show an empty message; otherwise, we show the list of selected cards:

```jsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedStack.map((item) => <div key={item.id}>{item.name}</div>)
)}

```
---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

* **Parent to Child:** The parent passes data down as attributes called props (e.g., <Technology techData="{techData}"/>), and the child receives them via its function parameters.

* **Child to Parent:** The parent passes a callback function to the child as a prop. When an event happens (like clicking a button), the child invokes that function and sends data back inside its arguments.