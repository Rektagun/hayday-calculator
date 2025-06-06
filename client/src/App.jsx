import "./output.css";
import axios from "axios";
import { useState } from "react";
// import ItemCard from "./comps/itemCard";

function App() {
  const [user_level, setUserLevel] = useState(2);
  // const [itemsDetails, setItemsDetails] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [neededItems, setNeededItems] = useState([]);
  // const [userCounts, setUserCounts] = useState({}); // Track user item counts

  function handleChange(e) {
    setUserLevel(e.target.value)
  }

  const getDataForLevel = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/data?level=${user_level}`);
      console.log(response.data)
    } catch { }
  }
  //
  // const itemDetails = itemsDetails.records.map((record) => {
  //   const node = record.get("p");
  //   return {
  //     // id: node.identity.low,
  //     name: node.properties.name,
  //     maxPrice: node.properties.maxPrice.low,
  //     level: node.properties.level.low,
  //     // type: node.properties.type,
  //     xp: node.properties.xp.low,
  //     imageUrl: node.properties.imageUrl,
  //   };
  // });
  //
  // console.log(itemDetails)

  return (
    <div className="flex flex-col bg-slate-300">
      <h1 className="text-center text-4xl">HayDay Thing</h1>

      <div className="flex flex-row">

        <input
          value={user_level}
          onChange={handleChange}
          className="my-auto flex"
          type="number"
        />

        <button className="my-auto flex" type="submit" onClick={getDataForLevel}>
          DONE
        </button>
      </div>

    </div >
  );
}

export default App;
