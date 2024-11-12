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
      },
      "count": 0,
      "icon": './icons/Bread.webp' 
    },

    "p2": { 
      "name": "butter",
      "ingredients": { 
        "wheat": 2,
        "corn": 1
      },
      "count": 0,
      "icon": './icons/Butter.webp' 
    },

    "p3": { 
      "name": "brownsugar",
      "ingredients": { 
        "sugarcane": 1
      },
      "count": 0,
      "icon": './icons/Brown_Sugar.webp' 
    },

    "p4": { 
      "name": "popcorn",
      "ingredients": { 
        "corn": 2
      },
      "count": 0,
      "icon": './icons/Popcorn.webp' 
    },

    "p5": { 
      "name": "butteredpopcorn",
      "ingredients": { 
        "corn": 2,
        "milk": 2
      },
      "count": 0,
      "icon": './icons/Buttered_Popcorn.webp' 
    },

    "p6": { 
      "name": "chilipopcorn",
      "ingredients": { 
        "corn": 2,
        "chilipepper": 2
      },
      "count": 0,
      "icon": './icons/Chili_Popcorn.webp' 
    },

    "p7": { 
      "name": "pancakes",
      "ingredients": { 
        "egg": 3,
        "sugarcane": 1
      },
      "count": 0,
      "icon": './icons/Pancake.webp' 
    },

    "p8": { 
      "name": "cookie",
      "ingredients": { 
        "wheat": 2,
        "egg": 2,
        "sugarcane": 1
      },
      "count": 0,
      "icon": './icons/Cookie.webp' 
    },

    "p9": { 
      "name": "baconandeggs",
      "ingredients": { 
        "bacon": 2,
        "egg": 4
      },
      "count": 0,
      "icon": './icons/Bacon_and_Eggs.webp' 
    },

    "p10": { 
      "name": "hamburger",
      "ingredients": { 
        "bacon": 2,
        "wheat": 6
      },
      "count": 0,
      "icon": './icons/Hamburger.webp' 
    },

    "p11": { 
      "name": "fishburger",
      "ingredients": { 
        "fishfillet": 2,
        "wheat": 6,
        "chilipepper": 1
      },
      "count": 0,
      "icon": './icons/Fish_Burger.webp' 
    },

    "p12": { 
      "name": "roastedtomatos",
      "ingredients": { 
        "tomato": 2
      },
      "count": 0,
      "icon": './icons/Roasted_Tomatoes.webp' 
    },

    "p13": { 
      "name": "cheese",
      "ingredients": { 
        "milk": 3
      },
      "count": 0,
      "icon": './icons/Cheese.webp' 
    },

    "p14": { 
      "name": "goatcheese",
      "ingredients": { 
        "goatmilk": 2
      },
      "count": 0,
      "icon": './icons/Goat_Cheese.webp' 
    },

    "p15": { 
      "name": "whitesugar",
      "ingredients": { 
        "sugarcane": 2
      },
      "count": 0,
      "icon": './icons/White_Sugar.webp' 
    },

    "p16": { 
      "name": "pizza",
      "ingredients": { 
        "wheat": 2,
        "tomato": 1,
        "milk": 3
      },
      "count": 0,
      "icon": './icons/Pizza.webp' 
    },

    "p17": { 
      "name": "syrup",
      "ingredients": { 
        "sugarcane": 4
      },
      "count": 0,
      "icon": './icons/Syrup.webp' 
    },

    "p18": { 
      "name": "carrotpie",
      "ingredients": { 
        "carrot": 3,
        "wheat": 2,
        "egg": 1,
      },
      "count": 0,
      "icon": './icons/Carrot.webp' 
    },

    "p19": { 
      "name": "pumpkinpie",
      "ingredients": { 
        "pumpkin": 1,
        "egg": 1,
        "wheat": 3
      },
      "count": 0,
      "icon": './icons/Pumpkin_Pie.webp' 
    },

    "p20": { 
      "name": "fishpie",
      "ingredients": { 
        "fishfillet": 1,
        "egg": 1,
        "wheat": 2
      },
      "count": 0,
      "icon": './icons/Fish_Pie.webp' 
    },

    "p21": { 
      "name": "applepie",
      "ingredients": { 
        "apple": 3,
        "egg": 1,
        "sugarcane": 4,
        "wheat": 2
      },
      "count": 0,
      "icon": './icons/Apple_Pie.webp' 
    },

    "p22": { 
      "name": "fetapie",
      "ingredients": { 
        "goatmilk": 2,
        "wheat": 2,
        "egg": 1
      },
      "count": 0,
      "icon": './icons/Feta_Pie.webp' 
    },

    "p23": { 
      "name": "baconpie",
      "ingredients": { 
        "bacon": 3,
        "egg": 1,
        "wheat": 2,
      },
      "count": 0,
      "icon": './icons/Bacon_Pie.webp' 
    },

    "p24": { 
      "name": "cottonfabric",
      "ingredients": { 
        "cotton": 3
      },
      "count": 0,
      "icon": './icons/Cotton_Fabric.webp' 
    },

    "p25": { 
      "name": "cottonshirt",
      "ingredients": { 
        "cotton": 6
      },
      "count": 0,
      "icon": './icons/Cotton_Shirt.webp' 
    },

    "p26": { 
      "name": "carrotcake",
      "ingredients": { 
        "carrot": 2,
        "milk": 2,
        "sugarcane": 1
      },
      "count": 0,
      "icon": './icons/Carrot_Cake.webp' 
    },

    "p27": { 
      "name": "creamcake",
      "ingredients": { 
        "wheat": 5,
        "milk": 1,
        "sugarcane": 2
      },
      "count": 0,
      "icon": './icons/Cream_Cake.webp' 
    },

    "p28": { 
      "name": "woolychaps",
      "ingredients": { 
        "wool": 3,
        "cotton": 3
      },
      "count": 0,
      "icon": './icons/Wooly_Chaps.webp' 
    },

    "p29": { 
      "name": "bluewoolyhat",
      "ingredients": { 
        "wool": 1,
        "indigo": 1
      },
      "count": 0,
      "icon": './icons/Blue_Woolly_Hat.webp' 
    },

    "p30": { 
      "name": "bluesweater",
      "ingredients": { 
        "wool": 2,
        "indigo": 2
      },
      "count": 0,
      "icon": './icons/Blue_Sweater.webp' 
    },

    "p31": { 
      "name": "cheesecake",
      "ingredients": { 
        "milk": 3,
        "wheat": 2,
        "egg": 2,
        "sugarcane": 1
      },
      "count": 0,
      "icon": './icons/Cheesecake.webp' 
    },

    "p32": { 
      "name": "redberrycake",
      "ingredients": { 
        "cherry": 2,
        "raspberry": 1,
        "egg": 1,
        "milk": 1
      },
      "count": 0,
      "icon": './icons/Red_Berry_Cake.webp' 
    },

    "p33": { 
      "name": "silverbar",
      "ingredients": { 
        "silverore": 3
      },
      "count": 0,
      "icon": './icons/Silver_Bar.webp' 
    },

    "p34": { 
      "name": "goldbar",
      "ingredients": { 
        "goldore": 3
      },
      "count": 0,
      "icon": './icons/Gold_Bar.webp' 
    },

    "p35": { 
      "name": "ironbar",
      "ingredients": { 
        "ironore": 3
      },
      "count": 0,
      "icon": './icons/Iron_Bar.webp' 
    },

    "p36": { 
      "name": "platinumbar",
      "ingredients": { 
        "platinumore": 3
      },
      "count": 0,
      "icon": './icons/Platinum_Bar.webp' 
    },

    "p37": { 
      "name": "refinedcoal",
      "ingredients": { 
        "coal": 3
      },
      "count": 0,
      "icon": './icons/Refined_Coal.webp' 
    },

    "p38": { 
      "name": "violetdress",
      "ingredients": { 
        "cotton": 6,
        "raspberry": 1,
        "indigo": 1
      },
      "count": 0,
      "icon": './icons/Violet_Dress.webp' 
    },

    "p39": { 
      "name": "blackberrymuffin",
      "ingredients": { 
        "wheat": 1,
        "egg": 2,
        "blackberry": 2
      },
      "count": 0,
      "icon": './icons/Blackberry_Muffin.webp' 
    },

    "p40": { 
      "name": "carrotjuice",
      "ingredients": { 
        "carrot": 3
      },
      "count": 0,
      "icon": './icons/Carrot_Cake.webp' 
    },

    "p41": { 
      "name": "applejuice",
      "ingredients": { 
        "apple": 2
      },
      "count": 0,
      "icon": './icons/Apple_Juice.webp' 
    },

    "p42": { 
      "name": "cherryjuice",
      "ingredients": { 
        "cherry": 2
      },
      "count": 0,
      "icon": './icons/Cherry_Juice.webp' 
    },

    "p43": { 
      "name": "tomatojuice",
      "ingredients": { 
        "tomato": 3
      },
      "count": 0,
      "icon": './icons/Tomato_Juice.webp' 
    },

    "p44": { 
      "name": "berryjuice",
      "ingredients": { 
        "blackberry": 1,
        "raspberry": 1
      },
      "count": 0,
      "icon": './icons/Berry_Juice.webp' 
    },

    "p45": { 
      "name": "cherrypopsicle",
      "ingredients": { 
        "sugarcane": 4,
        "cherry": 2
      },
      "count": 0,
      "icon": './icons/Cherry_Popsicle.webp' 
    },

    "p46": { 
      "name": "vanillaicecream",
      "ingredients": { 
        "milk": 3,
        "sugarcane": 4
      },
      "count": 0,
      "icon": './icons/Vanilla_Ice_Cream.webp' 
    },

    "p47": { 
      "name": "strawberryicecream",
      "ingredients": { 
        "strawberry": 3,
        "sugarcane": 2,
        "milk": 2,
      },
      "count": 0,
      "icon": './icons/Strawberry_Ice_Cream.webp' 
    },

    "p48": { 
      "name": "pigfeed",
      "ingredients": { 
        "carrot": 2,
        "soybean": 1
      },
      "count": 0,
      "icon": './icons/Pig_Feed.webp' 
    },


    "p49": { 
      "name": "chickenfeed",
      "ingredients": { 
        "wheat": 2,
        "corn": 1
      },
      "count": 0,
      "icon": './icons/Chicken_Feed.webp'

    },

    "p50": { 
      "name": "sheepfeed",
      "ingredients": { 
        "wheat": 3,
        "soybean": 1
      },
      "count": 0,
      "icon": './icons/Sheep_Feed.webp'

    },

    "p51": { 
      "name": "goatfeed",
      "ingredients": { 
        "carrot": 2,
        "wheat": 1,
        "corn": 1
      },
      "count": 0,
      "icon": './icons/Goat_Feed.webp'

    },

    "p52": { 
      "name": "sweater",
      "ingredients": { 
        "wool": 2
      },
      "count": 0,
      "icon": './icons/Sweater.webp'

    },

    "p53": { 
      "name": "cream",
      "ingredients": { 
        "milk": 1
      },
      "count": 0,
      "icon": './icons/Cream.webp'
    },

    "p54": { 
      "name": "cornbread",
      "ingredients": { 
        "corn": 2,
        "egg": 2
      },
      "count": 0,
      "icon": './icons/Corn_Bread.webp'
    },

    "p55": { 
      "name": "cowfeed",
      "ingredients": { 
        "soybean": 2,
        "corn": 1
      },
      "count": 0,
      "icon": './icons/Cow_Feed.webp'
    },
  };

  const [requiredItems, setRequiredItems] = useState([]);
  
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
              list[ingredient] = list[ingredient] + (
                products[product].ingredients[ingredient]
              );
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

      <h1 className='font-extrabold lobster-regular text-2xl flex justify-center'>
        Add items from this list!
      </h1>

      <div className='grid gap-1 grid-cols-3 text-sm font-bold w-full h-full'>

        {Object.entries(products).map(([id, product]) => (

          <div key={id} className='flex flex-row border-red-900 
            border-2 bg-red-100 rounded justify-between'>

            <button 
              onClick={() => handleAddItem(product.name)}
              className='size-10 flex rounded active:bg-green-200 
              border-black border-2 group my-auto hover:animate-pulse'>
              <img className='hover:size-8 m-auto group-active:size-6' 
                src={product.icon} alt={product.name} />
            </button>


            <div className='border-black border h-full rounded flex-col'> 

              <button 
                onClick={() => handleRemoveItem(product.name)}
                className='text-red-500 hover:bg-red-700 w-5 h-2 flex
                active:bg-red-400 bg-red-600 border-black border rounded-sm'>
              </button>

              <div className='border border-black rounded h-5 w-5 flex'>
                {product.count}
              </div>

            </div>

          </div>
        ))}

      </div>

      <h1 className='lobster-regular text-2xl flex justify-center'>
        Items you need!
      </h1>

      <div className='grid my-1 gap-1 grid-cols-3 text-sm font-bold w-full 
        h-full'>

        {Object.entries(list).map(([item, amount]) => (

          <div key={item} className='flex flex-row border-red-900 border-2 
            h-10 w-full rounded justify-between bg-green-50'>

            <button className='flex border-black border rounded mr-0'>
              {item}
            </button>
            <div className='flex w-5 h-5 justify-center border-black border rounded'>
              {amount}
            </div>
              {/* <img className='hover:size-8 m-auto group-active:size-6' src={product.icon} alt={product.name} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
