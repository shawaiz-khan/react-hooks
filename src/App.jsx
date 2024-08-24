import { Fragment } from 'react';
import './App.css';
import UseStateArrays from './hooks/useState/UseState-arrays';
import UseStateBasics from './hooks/useState/UseState-basics';
import UseStateFilter from './hooks/useState/UseState-filter';
import UseStateObject from './hooks/useState/UseState-object';
import UseStateCounter from './hooks/useState/UseState-counter';

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
