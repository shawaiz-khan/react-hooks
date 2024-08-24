import { useState } from "react";

export default function UseStateObject() {
    const [people, setPeople] = useState({
        name: "Shawaiz",
        age: 18,
        message: 'Random Message',
    });

    const ChangeMessage = () => {
        setPeople((prevPeople) => ({
            ...prevPeople,
            message: prevPeople.message === "Random Message" ? "Hello World" : "Random Message"
        }));
    };

    return (
        <main className="h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            <h1 className='text-center text-2xl font-bold mb-4'>OBJECTS</h1>
            <div className="text-black text-center border border-black p-10 rounded-lg">
                <h3 className="text-lg font-medium mb-2">{people.name}</h3>
                <h3 className="text-lg font-medium mb-2">{people.age}</h3>
                <h3 className="text-lg font-medium mb-4">{people.message}</h3>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={() => ChangeMessage()}>Change Message</button>
            </div>
        </main>
    );
}