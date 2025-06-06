import "./output.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [user_level, setUserLevel] = useState(2);
  const [itemsDetails, setItemsDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [neededItems, setNeededItems] = useState();

  function handleChange(e) {
    setUserLevel(e.target.value)
  }

  // const getWeather = async (city) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/api/weather?city=${city}`);
  //     console.log('Weather data:', response.data);
  //   } catch (error) {
  //     console.error('Failed to get weather:', error);
  //   }
  // };

  // DONT NEED TO SEND TO BACKEND, JUST CALCULATE HERE, AND SHOW

  // HTML

  return (

    <div className="flex flex-col bg-slate-300">
      <h1 className="text-center text-4xl">HayDay Thing</h1>

      <div className="flex flex-row" onSubmit={sendLevel}>

        <h6>Please enter your level:</h6>

        <input
          value={user_level}
          onChange={handleChange}
          className="my-auto flex"
          type="number"
        />

        <button className="my-auto flex" type="submit" onClick={sendLevel}>
          DONE
        </button>

        <button className="my-auto flex" onClick={calculate}>
          CALCULATE
        </button>

      </div>
      <div className="flex m-auto">
        {isLoading ? (
          <div>
            Loading...
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-row flex-wrap bg-slate-700 text-black">
        {itemsDetails && itemsDetails.map(item => (

          <div key={item.id} className="flex flex-col m-auto">
            <img className="size-16" src={item.imageUrl} alt="lll" />
            <p>id: {item.id}</p>
            <p>name: {item.name}</p>
            <p>count: {item.count}</p>
            <p>maxPrice: {item.maxPrice}</p>
            <p>level: {item.level}</p>
            <p>type: {item.type}</p>
            <p>xp: {item.xp}</p>
            <button onClick={() => addCount(item.id)}>
              +
            </button>
          </div>

        ))}
      </div>

    </div>
  );
}

export default App;
