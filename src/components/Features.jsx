import { initDavidAI } from 'david-ai';
import { useState, useRef, useEffect } from 'react';
import images from '../../dist/assets/images';

function Features(){
    const [activeTab, setActiveTab] = useState('tab1-group4');
    const tabIndicatorRef = useRef(null);
    const tabContainerRef = useRef(null);

    const tabs = [
        { id: 'tab1-group4', label: 'Simple Bookmarking' },
        { id: 'tab2-group4', label: 'Speedy Searching' },
        { id: 'tab3-group4', label: 'Easy Sharing' }
    ];

    const updateIndicator = (tabId) => {
        // Use setTimeout to ensure DOM is fully rendered
        setTimeout(() => {
            const tabElement = document.querySelector(`[data-dui-tab-target="${tabId}"]`);
            const indicator = tabIndicatorRef.current;
            const container = tabContainerRef.current;

            if (tabElement && indicator && container) {
                // Use getBoundingClientRect for more accurate positioning
                const tabRect = tabElement.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                const left = tabRect.left - containerRect.left;
                const width = tabRect.width;

                // Apply the styles
                indicator.style.left = `${left}px`;
                indicator.style.width = `${width}px`;
                indicator.style.opacity = '1';
            }
        }, 100);
    };

    useEffect(() => {
        // Initialize indicator on mount
        updateIndicator(activeTab);

        // Also update on window resize
        const handleResize = () => updateIndicator(activeTab);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        updateIndicator(activeTab);
    }, [activeTab]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return(
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-center font-medium text-4xl">Features</h1>
                <p className="px-20 py-5 text-center text-neutral-400 md:w-[40%]">
                   Our aim s to make it quick and easy for you to access your favourite websites. 
                   Your bookmarks sync between your devices so you can access them on the go. 
                </p>
                
<div className="relative tab-group my-7">
  <div ref={tabContainerRef} className="flex flex-col items-center border-b border-neutral-200 md:flex-row md:justify-center relative" role="tablist" style={{ position: 'relative' }}>
    <div ref={tabIndicatorRef} className="absolute bottom-0 h-0.5 bg-rose-400 transition-all duration-300"></div>

    {tabs.map((tab) => (
        <a
            key={tab.id}
            href="#"
            className={`tab-link border-t border-neutral-200 text-sm inline-block py-2 px-4 text-lg text-neutral-500 md:border-none hover:text-neutral-800 transition-colors duration-300 mr-1 ${
                activeTab === tab.id ? 'text-neutral-800' : ''
            }`}
            data-dui-tab-target={tab.id}
            onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab.id);
            }}
        >
          {tab.label}
        </a>
    ))}
    
  </div>
  <div className="mt-4 tab-content-container w-[70%] m-auto feat-bg">
    <div id="tab1-group4" className={`tab-content text-sm flex flex-col md:flex-row items-center gap-10 ${activeTab === 'tab1-group4' ? '' : 'hidden'}`}>
      
      <img src={images['illustration-features-tab-1.svg']} alt='img1'></img>
      <div className="flex flex-col gap:5 m-auto">
      <h2 className='text-center md:text-left text-3xl'>Bookmark in one click</h2>
      <p className='text-center md:text-left text-neutral-400 my-3'>Organize your bookmarks however you like. Our simple drag-and-drop
      interface gives you complete control over how you manage your favourite sites.</p>
     <button className="invisible md:visible bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-4 rounded w-[35%]">More info</button>
    </div>
    </div>
    <div id="tab2-group4" className={`tab-content text-sm flex flex-col md:flex-row items-center gap-10 ${activeTab === 'tab2-group4' ? '' : 'hidden'}`}>
      <img src={images['illustration-features-tab-2.svg']} alt='img2'></img>
      <div className="flex flex-col m-auto">
      <h2 className='text-center md:text-left text-3xl'>Intelligent search</h2>
      <p className='text-center md:text-left text-neutral-400 my-3'>Our powerful search feature will help you find 
      saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
     <button className="invisible md:visible bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-4 rounded w-[35%]">More info</button>
    </div>
    </div>
      <div id="tab3-group4" className={`tab-content text-sm flex flex-col md:flex-row items-center gap-10 ${activeTab === 'tab3-group4' ? '' : 'hidden'}`}>
      <img src={images['illustration-features-tab-3.svg']} alt='img3'></img>
      <div className="flex flex-col m-auto">
      <h2 className='text-center md:text-left text-3xl'>Share your bookmarks</h2>
      <p className='text-center md:text-left text-neutral-400 my-3'>Easily share your bookmarks and collections with others. Create a 
      shareable link that you can send at the click of a button</p>
     <button className="invisible md:visible bg-indigo-500 text-white shadow-xl hover:text-indigo-500 hover:bg-white border-2 border-indigo-500 py-2 px-4 rounded w-[35%]">More info</button>
    </div>
    </div>
  </div>
</div>

            </div>
        </>
    )
}

export default Features