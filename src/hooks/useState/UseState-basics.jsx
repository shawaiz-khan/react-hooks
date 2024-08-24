import { useState } from 'react';

export default function UseStateBasics() {
    const [text, setText] = useState("useState != Working");

    const handleSubmit = () => {
        if (text === "useState != Working") {
            setText("useState = Working");
        } else {
            setText("useState != Working");
        }
    }

    return (
        <main className='h-screen justify-center items-center flex'>
            <div className="p-5">
                <h1 className='text-center text-2xl font-bold mt-4'>BASIC</h1>
                <article className='p-5 flex justify-center items-start'>
                    <div className='text-center border border-black p-5 rounded-lg'>
                        <h2 className='text-3xl font-bold mb-3'>{text}</h2>
                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={handleSubmit}>Test useState</button>
                    </div>
                </article>
            </div>
        </main>
    );
}
