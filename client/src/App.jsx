import "./output.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [user_level, setUserLevel] = useState(5);
  const [itemDetails, setItemDetails] = useState(null);
  const [cachedData, setCachedData] = useState(null);

  function handleChange(e) {
    setUserLevel(e.target.value)
  }

  const getData = async () => {
    const datab = await axios.get('http://localhost:3001/api/data');
    console.log(datab.data)
    setCachedData(datab.data);
  }

  function reloadData() {
    getData();
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center">HayDay Thing</h1>

      <div className="flex flex-row">

        <button className="my-auto flex" type="submit" onClick={reloadData}>
          Reload
        </button>

      </div>
    </div>
  );
}

export default App;
