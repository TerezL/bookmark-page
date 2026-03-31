
import { useState, useRef, useEffect } from 'react';


function Accordion(){
    const [open, setOpen] = useState([]);

    const items = [
        {
            title: "What is Bookmark?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit iaculis, dapibus massa id, feugiat dui. Sed ac sodales ex, eu lobortis ligula. Aliquam lacus tortor, vehicula vitae dui id, faucibus feugiat dolor. Sed vulputate mauris vitae massa commodo mattis. Aliquam ac molestie nibh. Nulla finibus quis nulla ut malesuada.",
        },
        {
            title: "How can I request a new browser?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit iaculis, dapibus massa id, feugiat dui. Sed ac sodales ex, eu lobortis ligula. Aliquam lacus tortor, vehicula vitae dui id, faucibus feugiat dolor. Sed vulputate mauris vitae massa commodo mattis. Aliquam ac molestie nibh. Nulla finibus quis nulla ut malesuada.",
        },
        {
            title: "Is there a mobile app?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit iaculis, dapibus massa id, feugiat dui. Sed ac sodales ex, eu lobortis ligula. Aliquam lacus tortor, vehicula vitae dui id, faucibus feugiat dolor. Sed vulputate mauris vitae massa commodo mattis. Aliquam ac molestie nibh. Nulla finibus quis nulla ut malesuada.",
        },
        {
            title: "What about other Chromium browsers?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit iaculis, dapibus massa id, feugiat dui. Sed ac sodales ex, eu lobortis ligula. Aliquam lacus tortor, vehicula vitae dui id, faucibus feugiat dolor. Sed vulputate mauris vitae massa commodo mattis. Aliquam ac molestie nibh. Nulla finibus quis nulla ut malesuada.",
        },
    ];

    const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
 return (
    
    <>
    <div className="mt-15 flex flex-col items-center">
        <h1 className="text-center font-medium text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="px-20 py-5 text-center text-neutral-400 md:w-[40%]">
          Here are some of our FAQs. If you have any other questions
          you'd like answered plese feel free to email us.
        </p>
      </div>
      <div className="w-[80%] md:w-[40%] mb-10 mx-auto">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
            
          <div key={index} className="border-b border-stone-200">
            {/* HEADER */}
            <div
              onClick={() => toggle(index)}
              className="flex items-center justify-between py-5 cursor-pointer group hover:text-rose-500"
            >
              <span className="text-left">{item.title}</span>

              {/* ICON */}
              <svg
                className={`h-7 w-7 transition-all duration-300 
                  ${
                    isOpen
                      ? "text-rose-500"
                      : "text-indigo-500 rotate-180"
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="m5 15 7-7 7 7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mb-5 text-sm text-stone-500">
                {item.content}
              </p>
            </div>
          </div>
          
        );
      })}
      <div className="my-5 flex flex-col items-center">
      <button className="bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-4 rounded w-[35%]">More info</button>
    </div>
    </div>
    </>
  );
}

    
export default Accordion