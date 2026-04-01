import images from '../assets/images';

function Extensions() {
  return (
    <>
      <div className="mt-15 flex flex-col items-center">
        <h1 className="text-center font-medium text-4xl">
          Download the extension
        </h1>
        <p className="px-20 py-5 text-center text-neutral-400 md:w-[40%]">
          We've got more browsers in teh pipeline. Please do let us know if
          zou've got a favourite you'd lke us to proritize.
        </p>
      </div>
      <div className="flex flex-col items-center gap-20 my-10 md:flex-row justify-center md:gap-10 md:my-1">
        <div className="flex flex-col items-center shadow-xl p-5 rounded-lg gap-3">
            <img src={images['logo-chrome.svg']} alt="logo-chrome" />
            <h2 className="text-center font-medium text-2xl">Add to Chrome</h2>
            <p className="text-center text-neutral-400 mb-4">Minimum version 62</p>
            <img src={images['bg-dots.svg']} alt="bg" className="my-2"/>
             <button className="bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-6 rounded">Add & Install Extension</button>
        </div>
        <div className="flex flex-col items-center shadow-xl p-5 rounded-lg gap-3 md:mt-20">
            <img src={images['logo-firefox.svg']} alt="logo-chrome" />
            <h2 className="text-center font-medium text-2xl">Add to Firefox</h2>
            <p className="text-center text-neutral-400 mb-4">Minimum version 55</p>
            <img src={images['bg-dots.svg']} alt="bg" className="my-2"/>
             <button className="bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-6 rounded">Add & Install Extension</button>
        </div>
        <div className="flex flex-col items-center shadow-xl p-5 rounded-lg gap-3 md:mt-40">
            <img src={images['logo-opera.svg']} alt="logo-chrome" />
            <h2 className="text-center font-medium text-2xl">Add to Opera</h2>
            <p className="text-center text-neutral-400 mb-4">Minimum version 46</p>
            <img src={images['bg-dots.svg']} alt="bg" className="my-2"/>
             <button className="bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-6 rounded">Add & Install Extension</button>
        </div>
      </div>
    </>
  );
}

export default Extensions;
