import "./output.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [user_level, setUserLevel] = useState(5);
  const [itemDetails, setItemDetails] = useState(null);

  function handleChange(e) {
    setUserLevel(e.target.value)
  }

  async function sendLevel() {
    try {
      await axios.post('http://localhost:3001/', {
        value: user_level
      });
      console.log(`User's level sent to backend: ${user_level}`);
    }
    catch (err) {
      console.error(`Error while sending level to backend:`, err);
    }
  }

  async function fetchItemData() {
    try {
      const response = await axios.get('http://localhost:3001/')
      setItemDetails(response.data);
    }
    catch (err) {
      console.error(`Error while fetching items' data:`, err);
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center">HayDay Thing</h1>

      <div className="flex flex-row" onSubmit={sendLevel}>

        <h6>Your level:</h6>

        <input
          value={user_level}
          onChange={handleChange}
          className="my-auto flex"
          type="number"
        />

        <button className="my-auto flex" type="submit" onClick={sendLevel}>
          DONE
        </button>

      </div>
    </div>
  );
}

export default App;
