import images from '../assets/images';
function Intro(){
    return(
        <>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 w-[90%] m-auto picture">
                <img src={images['illustration-hero.svg']} alt="hero" className="md:order-2"/>
                <div className="flex flex-col justify-center my-10 mx-auto md:p-20">
                <h1 className="text-center font-medium text-5xl md:text-left">A Simple Bookmark Manager</h1>
                <p className="px-20 py-5 text-center text-neutral-400 md:text-left md:px-[0]">A clean and simple interface to organize your favourite website.
                Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="flex flex-row m-auto gap-3 md:justify-start md:m-0">
                <button className="bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 font-bold py-3 px-6 rounded">Get it on Chrome</button>
                <button className="bg-neutral-200 shadow-xl hover:border-2 border-neutral-400 hover:bg-white text-neutral-500 font-bold py-3 px-6 rounded">Get it on Firefox</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default Intro