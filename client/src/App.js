import ItemCard from './comps/itemCard';
import Silo from './comps/silo';
import './output.css';







function App() {

  return (

    <div className='mx-auto bg-blue-50 h-screen w-3/5'>

      <div className='flex flex-col w-full'>

        <h1 className='font-bold text-4xl'>
          Order
        </h1>

        <div className='flex flex-row w-full'>

          <div className='flex flex-col w-full'>

            <Silo/>

            <div className='flex flex-row flex-wrap'>


              <button className='flex flex-row h-20 bg-white w-fit rounded-xl m-1
                border-2 border-gray-600 justify-between shadow-black shadow-sm 
                hover:shadow-md hover:shadow-blue-900 group'>

                <img className='size-16 absolute z-10 blur-sm self-center ml-1 rounded-full' 
                  src='./icons/Corn.webp' alt='Spicy_Pizza' />
                <img className='size-16 self-center z-20 ml-1 rounded-lg' 
                  src='./icons/Corn.webp' alt='Spicy_Pizza' />

                <div className='flex flex-col m-1 p-1 rounded-lg justify-start 
                  border-black border bg-blue-100 text-center'>
                  <h1 className='font-extrabold border-2 border-black rounded-lg bg-white 
                    text-center'>3</h1>
                  <h1 className='text-gray-700 text-sm rounded-lg group-hover:hidden'>Spicy Pizza</h1>
                  <h1 className='text-blue-900 text-xs rounded-lg group-hover:hidden'>Bakery</h1>
                  <button className='font-extrabold border-2 border-black rounded-lg 
                    bg-white text-center hidden group-hover:block'>
                    ⊖
                  </button>
                </div>


              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
