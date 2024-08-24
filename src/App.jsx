import { Fragment } from 'react';
import './App.css';
import UseStateArrays from './useState Hook/UseState-arrays';
import UseStateBasics from './useState Hook/UseState-basics';
import UseStateFilter from './useState Hook/UseState-filter';
import UseStateObject from './useState Hook/UseState-object';
import UseStateCounter from './useState Hook/UseState-counter';

function App() {
  return (
    <Fragment>
      <main className="h-full bg-white text-start justify-start items-start w-full">
        <header className='font-bold justify-between border-b-2 shadow-md  border-gray-400 w-full p-5 flex items-center'>
          <h1 className='text-4xl text-blue-500'>useState Hook</h1>
          <h1 className='text-xl text-blue-500'>Author: <a href='https:\\devdigitals.org'>Shawaiz Khan</a></h1>
        </header>
        <div>
          <UseStateBasics />
          <UseStateArrays />
          <UseStateFilter />
          <UseStateObject />
          <UseStateCounter />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
