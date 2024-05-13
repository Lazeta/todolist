import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

function TodoList() {
  return (
    <div className="font-sans">
      <h3 className="text-3xl">What to learn</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={true}/><span> HTML</span></li>
        <li><input type="checkbox" checked={true}/><span> CSS</span></li>
        <li><input type="checkbox" checked={true}/><span> SASS</span></li>
      </ul>
    </div>
  );
}

export default App;
