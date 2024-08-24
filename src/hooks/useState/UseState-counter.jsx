import { useState } from "react"

export default function UseStateCounter() {
    const [count, setCount] = useState(0);

    const HandleIncrease = () => {
        setCount(count + 1);
    }

    const HandleReset = () => {
        setCount(0);
    }

    const HandleDecrease = () => {
        count == 0 ? setCount(0) : setCount(count - 1);
    }

    return (
        <main className='h-screen flex flex-col justify-center items-center bg-white p-6'>
                <h1 className='text-center text-2xl font-bold mb-4'>COUNTER</h1>
            <div className='flex-col text-center items-center text-black border border-black p-10 rounded-lg'>
                <h1 className='text-center text-2xl font-bold mb-4'>{count}</h1>
                <button className="flex gap-3">
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={HandleIncrease}>Increase</button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={HandleReset}>Reset</button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={HandleDecrease}>Decrease</button>
                </button>
            </div>
        </main>
    )
}
