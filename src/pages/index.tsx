import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todo, setTodo] = useState("");
  return (
    <main>
      <div className="h-screen flex justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center gap-6">
          <input
            className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
            //set value of input field
            value={todo}
            onChange={(e) => {
              //update state on changes to text
              setTodo(e.target.value);
            }}
            placeholder="Enter a new task"
          />
          <button
            className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
            onClick={() => {
              //execute function to add new todo to the list
            }}
          >
            Add Todo Item
          </button>
        </div>
        {/* Task List */}
        <div className="w-full text-center flex items-center flex-col gap-5">
          <h1 className="text-blue-600 uppercase font-semibold text-2xl">
            Task List
          </h1>
          <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
            <div className="flex justify-between items-center mb-5">
              <li className="list-none w-2/3 text-left break-normal">Task 1</li>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md">
                  Completed
                </button>
                <button className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
