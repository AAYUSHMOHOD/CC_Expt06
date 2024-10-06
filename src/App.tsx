import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";


function App() {
  return (
    <main>
      <h1>Welcome</h1>
      <button onClick={createTodo}>+ new</button>
      <div>
        🥳 App successfully hosted by Aayush. 
        <br />
      </div>
    </main>
  );
}

export default App;
