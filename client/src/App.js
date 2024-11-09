import './output.css';
import React, { useState } from 'react';
import Header from './comps/header';

function App() {

  // products
  const products = {

    "p1": { 
      "name": "bread",
      "ingredients": { 
        "wheat": 3
      } 
    },

    "p2": { 
      "name": "butter",
      "ingredients": { 
        "wheat": 2,
        "corn": 1
      } 
    },

    "p3": { 
      "name": "brownsugar",
      "ingredients": { 
        "sugarcane": 1
      } 
    },

    "p4": { 
      "name": "popcorn",
      "ingredients": { 
        "corn": 2
      } 
    },

    "p5": { 
      "name": "butteredpopcorn",
      "ingredients": { 
        "corn": 2,
        "milk": 2
      } 
    },

    "p6": { 
      "name": "chilipopcorn",
      "ingredients": { 
        "corn": 2,
        "chilipepper": 2
      } 
    },

    "p7": { 
      "name": "pancakes",
      "ingredients": { 
        "egg": 3,
        "sugarcane": 1
      } 
    },

    "p8": { 
      "name": "cookie",
      "ingredients": { 
        "wheat": 2,
        "egg": 2,
        "sugarcane": 1
      } 
    },

    "p9": { 
      "name": "baconandeggs",
      "ingredients": { 
        "bacon": 2,
        "egg": 4
      } 
    },

    "p10": { 
      "name": "hamburger",
      "ingredients": { 
        "bacon": 2,
        "wheat": 6
      } 
    },

    "p11": { 
      "name": "fishburger",
      "ingredients": { 
        "fishfillet": 2,
        "wheat": 6,
        "chilipepper": 1
      } 
    },

    "p12": { 
      "name": "roastedtomatos",
      "ingredients": { 
        "tomato": 2
      } 
    },

    "p13": { 
      "name": "cheese",
      "ingredients": { 
        "milk": 3
      } 
    },

    "p14": { 
      "name": "goatcheese",
      "ingredients": { 
        "goatmilk": 2
      } 
    },

    "p15": { 
      "name": "whitesugar",
      "ingredients": { 
        "sugarcane": 2
      } 
    },

    "p16": { 
      "name": "pizza",
      "ingredients": { 
        "wheat": 2,
        "tomato": 1,
        "milk": 3
      } 
    },

    "p17": { 
      "name": "syrup",
      "ingredients": { 
        "sugarcane": 4
      } 
    },

    "p18": { 
      "name": "carrotpie",
      "ingredients": { 
        "carrot": 3,
        "wheat": 2,
        "egg": 1,
      } 
    },

    "p19": { 
      "name": "pumpkinpie",
      "ingredients": { 
        "pumpkin": 1,
        "egg": 1,
        "wheat": 3
      } 
    },

    "p20": { 
      "name": "fishpie",
      "ingredients": { 
        "fishfillet": 1,
        "egg": 1,
        "wheat": 2
      } 
    },

    "p21": { 
      "name": "applepie",
      "ingredients": { 
        "apple": 3,
        "egg": 1,
        "sugarcane": 4,
        "wheat": 2
      } 
    },

    "p22": { 
      "name": "fetapie",
      "ingredients": { 
        "goatmilk": 2,
        "wheat": 2,
        "egg": 1
      } 
    },

    "p23": { 
      "name": "baconpie",
      "ingredients": { 
        "bacon": 3,
        "egg": 1,
        "wheat": 2,
      } 
    },

    "p24": { 
      "name": "cottonfabric",
      "ingredients": { 
        "cotton": 3
      } 
    },

    "p25": { 
      "name": "cottonshirt",
      "ingredients": { 
        "cotton": 6
      } 
    },

    "p26": { 
      "name": "carrotcake",
      "ingredients": { 
        "carrot": 2,
        "milk": 2,
        "sugarcane": 1
      } 
    },

    "p27": { 
      "name": "creamcake",
      "ingredients": { 
        "wheat": 5,
        "milk": 1,
        "sugarcane": 2
      } 
    },

    "p28": { 
      "name": "woolychaps",
      "ingredients": { 
        "wool": 3,
        "cotton": 3
      } 
    },

    "p29": { 
      "name": "bluewoolyhat",
      "ingredients": { 
        "wool": 1,
        "indigo": 1
      } 
    },

    "p30": { 
      "name": "bluesweater",
      "ingredients": { 
        "wool": 2,
        "indigo": 2
      } 
    },

    "p31": { 
      "name": "cheesecake",
      "ingredients": { 
        "milk": 3,
        "wheat": 2,
        "egg": 2,
        "sugarcane": 1
      } 
    },

    "p32": { 
      "name": "redberrycake",
      "ingredients": { 
        "cherry": 2,
        "raspberry": 1,
        "egg": 1,
        "milk": 1
      } 
    },

    "p33": { 
      "name": "silverbar",
      "ingredients": { 
        "silverore": 3
      } 
    },

    "p34": { 
      "name": "goldbar",
      "ingredients": { 
        "goldore": 3
      } 
    },

    "p35": { 
      "name": "ironbar",
      "ingredients": { 
        "ironore": 3
      } 
    },

    "p36": { 
      "name": "platinumbar",
      "ingredients": { 
        "platinumore": 3
      } 
    },

    "p37": { 
      "name": "refinedcoal",
      "ingredients": { 
        "coal": 3
      } 
    },

    "p38": { 
      "name": "violetdress",
      "ingredients": { 
        "cotton": 6,
        "raspberry": 1,
        "indigo": 1
      } 
    },

    "p39": { 
      "name": "blackberrymuffin",
      "ingredients": { 
        "wheat": 1,
        "egg": 2,
        "blackberry": 2
      } 
    },

    "p40": { 
      "name": "carrotjuice",
      "ingredients": { 
        "carrot": 3
      } 
    },

    "p41": { 
      "name": "applejuice",
      "ingredients": { 
        "apple": 2
      } 
    },

    "p42": { 
      "name": "cherryjuice",
      "ingredients": { 
        "cherry": 2
      } 
    },

    "p43": { 
      "name": "tomatojuice",
      "ingredients": { 
        "tomato": 3
      } 
    },

    "p44": { 
      "name": "berryjuice",
      "ingredients": { 
        "blackberry": 1,
        "raspberry": 1
      } 
    },

    "p45": { 
      "name": "cherrypopsicle",
      "ingredients": { 
        "sugarcane": 4,
        "cherry": 2
      } 
    },

    "p46": { 
      "name": "vanillaicecream",
      "ingredients": { 
        "milk": 3,
        "sugarcane": 4
      } 
    },

    "p47": { 
      "name": "strawberryicecream",
      "ingredients": { 
        "strawberry": 3,
        "sugarcane": 2,
        "milk": 2,
      } 
    },

    "p48": { 
      "name": "pigfeed",
      "ingredients": { 
        "carrot": 2,
        "soybean": 1
      } 
    },

    "p49": { 
      "name": "chickenfeed",
      "ingredients": { 
        "wheat": 2,
        "corn": 1
      } 
    },

    "p50": { 
      "name": "sheepfeed",
      "ingredients": { 
        "wheat": 3,
        "soybean": 1
      } 
    },

    "p51": { 
      "name": "goatfeed",
      "ingredients": { 
        "carrot": 2,
        "wheat": 1,
        "corn": 1
      } 
    },

    "p52": { 
      "name": "sweater",
      "ingredients": { 
        "wool": 2
      } 
    },

    "p53": { 
      "name": "cream",
      "ingredients": { 
        "milk": 1
      } 
    },

    "p54": { 
      "name": "cornbread",
      "ingredients": { 
        "corn": 2,
        "egg": 2
      } 
    },

    "p55": { 
      "name": "cowfeed",
      "ingredients": { 
        "soybean": 2,
        "corn": 1
      } 
    },
  };

  const [requiredItems, setRequiredItems] = useState([]);

  const productNames = Object.values(products).map (
    function (product) {
      return product.name;
    }
  );

  const calculateList = () => {
    var list = {};

    for (var item of requiredItems) {
      for (var product in products) {
        if (products[product].name === item) {
          for (const ingredient in products[product].ingredients) {
            if (!list[ingredient]) {
              list[ingredient] = products[product].ingredients[ingredient];
            }
            else {
              list[ingredient] = list[ingredient] + (products[product].ingredients[ingredient]);
            }
          }
        }
      }
    }
    return list;
  };

  const handleAddItem = (name) => {
    setRequiredItems([...requiredItems, name]);
  }

  const handleRemoveItem = (name) => {
    setRequiredItems(requiredItems.filter(item => item !== name));
  }

    const list = calculateList();

    return (


      <div className='p-1 border-black overflow-x-clip'>

        <Header />

        <h1 className='font-extrabold text-2xl flex justify-center'>
          Add items from this list!
        </h1>







        <div className='grid grid-cols-2 text-sm font-bold bg-red-100 w-full'>

          {Object.entries(productNames).map(([id, name]) => (

            <div key={id} className='flex flex-row'>

              <button 
                onClick={() => handleRemoveItem(name)}
                className='text-3xl font-bold text-red-500'>-</button>

              <button 
                onClick={() => handleAddItem(name)}
                className='border-black text-sm border h-10 w-10'>{name}</button>


            </div>
          ))}
        </div>





        <div className='grid grid-cols-4'>

          {Object.entries(list).map(([item, amount]) => (

            <div key={item} className=''>

              <button className='border-black text-sm border h-10 w-10'>{item}</button>

              <span className='absolute mt-5'>{amount}</span>

            </div>
          ))}
        </div>
      </div>
    );
  }

  export default App;
