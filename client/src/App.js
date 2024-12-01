import ItemCard from './comps/itemCard';
import './output.css';

function App() {

  return (

    <div className='m-2 bg-blue-50 h-screen'>

      <div className='flex flex-col w-full'>

        <h1 className='font-bold text-4xl'>
          Order
        </h1>

        <div className='flex flex-row w-full'>

          <div className='flex flex-col w-full'>

            <div className='flex flex-row justify-center'> 
              <img className='size-12' src='./icons/Silo.webp' alt='barn' />
            <h1 className='text-center font-bold text-4xl'>
              silo
            </h1>
            </div>

            <div className='flex flex-row flex-wrap'>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
