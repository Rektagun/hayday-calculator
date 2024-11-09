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
      "icon": './icons/Bread.webp' 
    },

    "p2": { 
      "name": "butter",
      "ingredients": { 
        "wheat": 2,
        "corn": 1
      },
      "icon": './icons/Butter.webp' 
    },

    "p3": { 
      "name": "brownsugar",
      "ingredients": { 
        "sugarcane": 1
      },
      "icon": './icons/Brown_Sugar.webp' 
    },

    "p4": { 
      "name": "popcorn",
      "ingredients": { 
        "corn": 2
      },
      "icon": './icons/Popcorn.webp' 
    },

    "p5": { 
      "name": "butteredpopcorn",
      "ingredients": { 
        "corn": 2,
        "milk": 2
      },
      "icon": './icons/Buttered_Popcorn.webp' 
    },

    "p6": { 
      "name": "chilipopcorn",
      "ingredients": { 
        "corn": 2,
        "chilipepper": 2
      },
      "icon": './icons/Chili_Popcorn.webp' 
    },

    "p7": { 
      "name": "pancakes",
      "ingredients": { 
        "egg": 3,
        "sugarcane": 1
      },
      "icon": './icons/Pancake.webp' 
    },

    "p8": { 
      "name": "cookie",
      "ingredients": { 
        "wheat": 2,
        "egg": 2,
        "sugarcane": 1
      },
      "icon": './icons/Cookie.webp' 
    },

    "p9": { 
      "name": "baconandeggs",
      "ingredients": { 
        "bacon": 2,
        "egg": 4
      },
      "icon": './icons/Bacon_and_Eggs.webp' 
    },

    "p10": { 
      "name": "hamburger",
      "ingredients": { 
        "bacon": 2,
        "wheat": 6
      },
      "icon": './icons/Hamburger.webp' 
    },

    "p11": { 
      "name": "fishburger",
      "ingredients": { 
        "fishfillet": 2,
        "wheat": 6,
        "chilipepper": 1
      },
      "icon": './icons/Fish_Burger.webp' 
    },

    "p12": { 
      "name": "roastedtomatos",
      "ingredients": { 
        "tomato": 2
      },
      "icon": './icons/Roasted_Tomatoes.webp' 
    },

    "p13": { 
      "name": "cheese",
      "ingredients": { 
        "milk": 3
      },
      "icon": './icons/Cheese.webp' 
    },

    "p14": { 
      "name": "goatcheese",
      "ingredients": { 
        "goatmilk": 2
      },
      "icon": './icons/Goat_Cheese.webp' 
    },

    "p15": { 
      "name": "whitesugar",
      "ingredients": { 
        "sugarcane": 2
      },
      "icon": './icons/White_Sugar.webp' 
    },

    "p16": { 
      "name": "pizza",
      "ingredients": { 
        "wheat": 2,
        "tomato": 1,
        "milk": 3
      },
      "icon": './icons/Pizza.webp' 
    },

    "p17": { 
      "name": "syrup",
      "ingredients": { 
        "sugarcane": 4
      },
      "icon": './icons/Syrup.webp' 
    },

    "p18": { 
      "name": "carrotpie",
      "ingredients": { 
        "carrot": 3,
        "wheat": 2,
        "egg": 1,
      },
      "icon": './icons/Carrot.webp' 
    },

    "p19": { 
      "name": "pumpkinpie",
      "ingredients": { 
        "pumpkin": 1,
        "egg": 1,
        "wheat": 3
      },
      "icon": './icons/Pumpkin_Pie.webp' 
    },

    "p20": { 
      "name": "fishpie",
      "ingredients": { 
        "fishfillet": 1,
        "egg": 1,
        "wheat": 2
      },
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
      "icon": './icons/Apple_Pie.webp' 
    },

    "p22": { 
      "name": "fetapie",
      "ingredients": { 
        "goatmilk": 2,
        "wheat": 2,
        "egg": 1
      },
      "icon": './icons/Feta_Pie.webp' 
    },

    "p23": { 
      "name": "baconpie",
      "ingredients": { 
        "bacon": 3,
        "egg": 1,
        "wheat": 2,
      },
      "icon": './icons/Bacon_Pie.webp' 
    },

    "p24": { 
      "name": "cottonfabric",
      "ingredients": { 
        "cotton": 3
      },
      "icon": './icons/Cotton_Fabric.webp' 
    },

    "p25": { 
      "name": "cottonshirt",
      "ingredients": { 
        "cotton": 6
      },
      "icon": './icons/Cotton_Shirt.webp' 
    },

    "p26": { 
      "name": "carrotcake",
      "ingredients": { 
        "carrot": 2,
        "milk": 2,
        "sugarcane": 1
      },
      "icon": './icons/Carrot_Cake.webp' 
    },

    "p27": { 
      "name": "creamcake",
      "ingredients": { 
        "wheat": 5,
        "milk": 1,
        "sugarcane": 2
      },
      "icon": './icons/Cream_Cake.webp' 
    },

    "p28": { 
      "name": "woolychaps",
      "ingredients": { 
        "wool": 3,
        "cotton": 3
      },
      "icon": './icons/Wooly_Chaps.webp' 
    },

    "p29": { 
      "name": "bluewoolyhat",
      "ingredients": { 
        "wool": 1,
        "indigo": 1
      },
      "icon": './icons/Blue_Woolly_Hat.webp' 
    },

    "p30": { 
      "name": "bluesweater",
      "ingredients": { 
        "wool": 2,
        "indigo": 2
      },
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
      "icon": './icons/Red_Berry_Cake.webp' 
    },

    "p33": { 
      "name": "silverbar",
      "ingredients": { 
        "silverore": 3
      },
      "icon": './icons/Silver_Bar.webp' 
    },

    "p34": { 
      "name": "goldbar",
      "ingredients": { 
        "goldore": 3
      },
      "icon": './icons/Gold_Bar.webp' 
    },

    "p35": { 
      "name": "ironbar",
      "ingredients": { 
        "ironore": 3
      },
      "icon": './icons/Iron_Bar.webp' 
    },

    "p36": { 
      "name": "platinumbar",
      "ingredients": { 
        "platinumore": 3
      },
      "icon": './icons/Platinum_Bar.webp' 
    },

    "p37": { 
      "name": "refinedcoal",
      "ingredients": { 
        "coal": 3
      },
      "icon": './icons/Refined_Coal.webp' 
    },

    "p38": { 
      "name": "violetdress",
      "ingredients": { 
        "cotton": 6,
        "raspberry": 1,
        "indigo": 1
      },
      "icon": './icons/Violet_Dress.webp' 
    },

    "p39": { 
      "name": "blackberrymuffin",
      "ingredients": { 
        "wheat": 1,
        "egg": 2,
        "blackberry": 2
      },
      "icon": './icons/Blackberry_Muffin.webp' 
    },

    "p40": { 
      "name": "carrotjuice",
      "ingredients": { 
        "carrot": 3
      },
      "icon": './icons/Carrot_Cake.webp' 
    },

    "p41": { 
      "name": "applejuice",
      "ingredients": { 
        "apple": 2
      },
      "icon": './icons/Apple_Juice.webp' 
    },

    "p42": { 
      "name": "cherryjuice",
      "ingredients": { 
        "cherry": 2
      },
      "icon": './icons/Cherry_Juice.webp' 
    },

    "p43": { 
      "name": "tomatojuice",
      "ingredients": { 
        "tomato": 3
      },
      "icon": './icons/Tomato_Juice.webp' 
    },

    "p44": { 
      "name": "berryjuice",
      "ingredients": { 
        "blackberry": 1,
        "raspberry": 1
      },
      "icon": './icons/Berry_Juice.webp' 
    },

    "p45": { 
      "name": "cherrypopsicle",
      "ingredients": { 
        "sugarcane": 4,
        "cherry": 2
      },
      "icon": './icons/Cherry_Popsicle.webp' 
    },

    "p46": { 
      "name": "vanillaicecream",
      "ingredients": { 
        "milk": 3,
        "sugarcane": 4
      },
      "icon": './icons/Vanilla_Ice_Cream.webp' 
    },

    "p47": { 
      "name": "strawberryicecream",
      "ingredients": { 
        "strawberry": 3,
        "sugarcane": 2,
        "milk": 2,
      },
      "icon": './icons/Strawberry_Ice_Cream.webp' 
    },

    "p48": { 
      "name": "pigfeed",
      "ingredients": { 
        "carrot": 2,
        "soybean": 1
      },
      "icon": './icons/Pig_Feed.webp' 
    },


    "p49": { 
      "name": "chickenfeed",
      "ingredients": { 
        "wheat": 2,
        "corn": 1
      },
      "icon": './icons/Chicken_Feed.webp'

    },

    "p50": { 
      "name": "sheepfeed",
      "ingredients": { 
        "wheat": 3,
        "soybean": 1
      },
      "icon": './icons/Sheep_Feed.webp'

    },

    "p51": { 
      "name": "goatfeed",
      "ingredients": { 
        "carrot": 2,
        "wheat": 1,
        "corn": 1
      },
      "icon": './icons/Goat_Feed.webp'

    },

    "p52": { 
      "name": "sweater",
      "ingredients": { 
        "wool": 2
      },
      "icon": './icons/Sweater.webp'

    },

    "p53": { 
      "name": "cream",
      "ingredients": { 
        "milk": 1
      },
      "icon": './icons/Cream.webp'

    },

    "p54": { 
      "name": "cornbread",
      "ingredients": { 
        "corn": 2,
        "egg": 2
      },
      "icon": './icons/Corn_Bread.webp'

    },

    "p55": { 
      "name": "cowfeed",
      "ingredients": { 
        "soybean": 2,
        "corn": 1
      },
      "icon": './icons/Cow_Feed.webp'
    },
  };

  const [requiredItems, setRequiredItems] = useState([]);

  const productNames = Object.values(products).map(product => (product.name));
  const productIcons = Object.values(products).map(product => (product.icon));

  console.log(productIcons);

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
              onClick={
                () => handleAddItem(name)}
              className='border-black text-sm border h-10 w-10'>{name}</button>
            {/* {/1* <img src={icon} alt='alt' /> *1/} </button> */}
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
