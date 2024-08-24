import React from 'react';
import { data } from '../data/data';

export default function UseStateArrays() {
    const [people, setPeople] = React.useState(data);

    const HandleClear = () => {
        setPeople([]);
    }

    const HandleShow = () => {
        setPeople(data);
    }

    return (
        <main className='h-screen justify-center items-center bg-gray-100 p-10 flex'>
            <div className='p-5 flex-col text-center items-center'>
                <h1 className='text-center text-2xl font-bold mb-4'>ARRAYS</h1>
                {people.map((person) => (
                    <div key={person.id} className='bg-white border border-gray-300 p-4 mb-2 rounded-lg w-64'>
                        <h2 className='text-xl font-semibold'>{person.firstName} {person.lastName}</h2>
                    </div>
                ))}
                <article className='flex gap-4'>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={HandleShow}>Show Items</button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={HandleClear}>Clear Items</button>
                </article>
            </div>
        </main>
    );
}
