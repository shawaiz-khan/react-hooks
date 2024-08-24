import { Fragment } from 'react';
import './App.css';
import UseStateArrays from './hooks/useState/UseState-arrays';
import UseStateBasics from './hooks/useState/UseState-basics';
import UseStateFilter from './hooks/useState/UseState-filter';
import UseStateObject from './hooks/useState/UseState-object';

function App() {
  return (
    <Fragment>
      <main className="h-full bg-white text-start justify-start items-start w-screen">
        <header>
          <h1 className='text-white text-3xl font-bold text-center bg-blue-500 w-full p-5'>useState Hook</h1>
        </header>
        <div>
          <UseStateBasics />
          <UseStateArrays />
          <UseStateFilter />
          <UseStateObject />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
