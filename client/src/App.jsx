import "./output.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemCard from "./components/itemCard";
import NeedItemCard from "./components/needItemCard";

function App() {
  const [user_level, setUserLevel] = useState(40);
  const [dataFromDB, setDataFromDB] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countItems, setCountItems] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  function handleChange(e) {
    setUserLevel(e.target.value);
  }

  const getDataForLevel = async () => {
    setLoading(true);
    try {
      console.log("SENT REQ TO SERVER");
      let response = await axios.get(`/api/data?level=${user_level}`);
      // let response = await axios.get(`http://localhost:3001/api/data?level=${user_level}`);
      setDataFromDB(response.data);
      console.log("GOT DATA FROM SERVER ", user_level);
    } catch (err) {
      console.log("Cannot get data from serverside!");
    } finally {
      setLoading(false);
    }
  };

  let allItems = (dataFromDB?.Items);
  let allRecipe = (dataFromDB?.Recipes);

  useEffect(() => {
    if (dataFromDB?.Items) {
      let items = allItems?.map((item) => {
        return {
          ...item,
          count: 0
        }
      });
      setCountItems(items || []);
    }
  }, [dataFromDB]);


  useEffect(() => {
    getDataForLevel();
  }, []);

  async function incrementCount(index) {

    let tempItems = [];
    for (let i = 0; i < countItems.length; i++) {
      if (i === index) {
        let newItem = {
          ...countItems[i],
          count: countItems[index].count + 1
        }
        tempItems.push(newItem)
      }
      else {
        tempItems.push(countItems[i])
      }
    }
    setCountItems(tempItems);

    let tempIngredients = [];
    for (let j = 0; j < allRecipe.length; j++) {
      if (tempItems[index].name === allRecipe[j].itemName) {
        let indexOfItem = ingredients.findIndex(item => item?.neededItem === allRecipe[j]?.requireName);
        if (indexOfItem >= 0) {
          ingredients[indexOfItem].neededCount = ingredients[indexOfItem].neededCount + allRecipe[j].requireCount;
        }
        else if (indexOfItem === -1) {
          let newItem = {
            neededItem: allRecipe[j].requireName,
            neededCount: allRecipe[j].requireCount,
            imageUrl: allRecipe[j].imageUrl
          }
          tempIngredients?.push(newItem);
        }
      }
    }
    setIngredients(prev => [...prev, ...tempIngredients]);
  };

  // console.log(countItems)
  // console.log(allRecipe)
  // console.log(ingredients)

  function decrementIngredientCount(index) {
    setIngredients(prevIngredients => {
      const tempIngredients = [...prevIngredients];

      if (tempIngredients[index]?.neededCount > 1) {
        tempIngredients[index] = {
          ...tempIngredients[index],
          neededCount: tempIngredients[index].neededCount - 1
        };
      } else {
        // Remove the ingredient if count would become 0
        tempIngredients?.splice(index, 1);
      }

      return tempIngredients;
    });
  }

  function resetIngredients() {
    let items = allItems?.map((item) => {
      return {
        ...item,
        count: 0
      }
    });
    setCountItems(items || []);
    setIngredients([]);
  }

  return (
    <div className="flex flex-col bg-slate-900 min-h-screen px-2 pt-4 pb-2 scroll-smooth">
      <h1 className="flex mx-auto text-center bg-gradient-to-bl to-slate-800 from-transparent text-5xl text-[#dacd81] border-2  border-[#daa181] rounded-2xl p-4 px-8 w-fit lobster">HayDay Inventory Manager</h1>

      <section className="flex flex-row border-2 border-t-0 border-[#daa181] rounded-b-2xl bg-gradient-to-tr to-slate-800 from-transparent w-fit mx-auto p-4 gap-4">

        <h1 className="flex text-slate-50 text-2xl m-auto">
          <span className="text-green-500 mr-2">Step-1{'>'}</span>
          Enter your level:
        </h1>

        <input
          value={user_level}
          onChange={handleChange}
          className="flex m-auto text-2xl text-[#f3efd6] w-32 rounded-md bg-slate-700 p-1 px-2 hover:bg-slate-600 active:bg-slate-500 duration-200 transition-colors"
          type="number"
        />

        <button
          className="m-auto flex bg-green-700/80 text-slate-50 text-2xl rounded-md p-1 px-2 hover:bg-slate-600 active:bg-slate-400 duration-200 transition-colors"
          type="submit"
          onClick={getDataForLevel}>
          DONE
        </button>
      </section>

      <div className="flex flex-row gap-1 mt-4">

        <section className="text-white/90 w-full bg-slate-700/70 my-2 rounded-3xl flex flex-col">
          <div className="flex-row flex justify-center items-center">
            <a href="https://rektagun.github.io/" target="_blank" rel="noopener noreferrer"
              className="mx-2 my-4 text-center w-fit flex bg-green-700/80 text-slate-50 text-sm rounded-md py-1 px-2 hover:bg-slate-600 active:bg-slate-400 duration-200 transition-colors">
              Made by: Suryaprakash Khatri
              <span className="scale-110 mx-1">  ⌝</span>
            </a>
            <button
              className="mx-2 my-4 text-center w-fit flex bg-red-700/80 text-slate-50 text-2xl rounded-md py-2 px-4 hover:bg-slate-600 active:bg-slate-400 duration-200 transition-colors"
              onClick={resetIngredients}>
              RESET
            </button>
          </div>
          {
            countItems && countItems.length > 0 ? (
              <div className="flex flex-row flex-wrap justify-center rounded-3xl w-full h-full">
                {
                  loading ? (
                    <div className="flex text-center mx-auto">
                      <p className="text-blue-200 text-2xl my-auto text-center">Loading...</p>
                    </div>
                  ) : countItems.map((item, index) => (
                    <ItemCard
                      key={index}
                      name={item.name}
                      count={item.count}
                      imageUrl={item.imageUrl}
                      incrementCount={() => incrementCount(index)}
                      // removeItem={() => { removeItem(index) }}
                      // decrementCount={() => decrementCount(index)}
                      maxPrice={item.maxPrice}
                      level={item.level}
                      productionLocation={item.productionLocation}
                      productionTime={item.productionTime}
                    />
                  ))
                }
              </div>
            ) : (<></>)
          }
        </section>
        <section className="text-white/90 w-full bg-slate-700/70 my-2 rounded-3xl flex flex-col justify-center items-center h-fit">
          <div className="flex-row flex justify-center items-center">
          </div>
          {ingredients && ingredients.length > 0 ? (
            <div className="flex flex-row flex-wrap justify-center mx-auto items-start border-2 border-slate-700 rounded-3xl w-full h-fit">
              <div
                className="mx-auto text-2xl text-green-500 font-bold my-4">
                Here are the items you need to have:
              </div>
              {ingredients?.map((ingredient, index) =>
                ingredient?.neededCount > 0 &&
                (
                  <NeedItemCard
                    key={index}
                    imageUrl={ingredient?.imageUrl}
                    name={ingredient?.neededItem}
                    count={ingredient?.neededCount}
                    decrementCount={() => decrementIngredientCount(index)}
                  />
                ))}
            </div>
          ) : (
            <div className="flex flex-col mx-auto px-4 py-2">
              <div className="mx-auto text-2xl text-green-500 font-bold my-4">
                Step-2{'> '}Start selecting the items you want in the game
              </div>
              <div className="mx-auto text-lg text-green-500 font-bold my-4">
                You'll see the ingredients needed to make those items here on this side...
              </div>
              <div className="mx-auto text-2xl text-red-300 font-bold my-4"> Tip: Zoom out to 80%</div>
            </div>
          )}
        </section>
      </div>
    </div >
  );
}

export default App;
