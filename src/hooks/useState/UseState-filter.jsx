import React from 'react';
import { data } from '../../data/data';

export default function UseStateFilter() {
    const [people, setPeople] = React.useState(data);

    const HandleRemove = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    return (
        <main className='h-screen justify-center items-center bg-white p-10 flex'>
            <div className='p-5 flex-col text-center items-center'>
                <h1 className='text-center text-2xl font-bold mb-4'>FILTER</h1>
                {people.map((person) => (
                    <div key={person.id} className='bg-white border border-gray-300 p-4 mb-2 rounded-lg w-72 flex justify-between items-center'>
                        <h2 className='text-xl font-semibold'>{person.firstName} {person.lastName}</h2>
                        <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-white transition-all duration-300 ease-in-out" onClick={(() => HandleRemove(person.id))}>Remove</button>
                    </div>
                ))}
            </div>
        </main>
    );
}
