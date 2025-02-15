import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex flex-col md:flex-row justify-between mt-8 border border-cyan-500 m-auto px-4 md:px-12 pt-5 pb-12 w-full max-w-screen-lg h-auto rounded-[24px]">
        <span className="flex justify-start">
          <img className="w-30 mt-2" src="Frame 1618871078.svg" alt="Frame 1"></img>
        </span>
        <span className="text-[#B3B3B3] font-JejuMyeongjo hidden sm:inline mt-6">
         <Link href="/events">Events</Link>
        </span>
        <span className="text-[#B3B3B3] font-JejuMyeongjo hidden sm:inline mt-6">
         <Link href="/myticket">My Tickets</Link>
        </span>
        <span className="text-[#B3B3B3] font-JejuMyeongjo hidden sm:inline mt-6">
         <Link href="/about">About Projects</Link>
        </span>

        <div className="flex justify-end mb-0 md:mt-0">
          <span>
           <button type="button" className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
             <p className="mt-2">MY TICKETS</p>
             <svg viewBox="0 0 24 24" width={40} fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
               <path d="M7 12L17 12M7 12L11 8M7 12L11 16" stroke="#000000" />
             </svg>
           </button>
          </span>
        </div>
  
      </div>
      
      <div className="content w-full max-w-screen-md text-white rounded-[40px] p-6 shadow-lg mx-auto border border-cyan-500 relative mt-20 mb-20">
        <div className="flex justify-between">
          <p className="font-JejuMyeongjo text-[32px]">Ticket Selection</p>
          <p className="font-Roboto text-[16px]">Step 1/3</p>
        </div>
        <div><img src="Progress container.svg" alt="Progress"></img></div>
        <div className="content w-full text-white rounded-[32px] shadow-lg mx-auto border border-cyan-500 mt-10 mb-16 p-10 ">
          <h1 className="font-Road Rage text-[42px] text-center">Techember Fest "25</h1>
          <p className="pb-2 text-center">Join us for an unforgettable experience at</p>
          <p className="pb-2 text-center">[Event Name] Secure your spot now.</p>
          <div className="flex justify-evenly">
            <span>📍 [Event Location]</span>
            <span>| |</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </div>
          <div className="border-none bg-[#0E464F] h-1 rounded-[5px] mt-10"></div>
          <p className="mt-6">Select Ticket Type:</p>
          <div className="sm:grid lg:flex md:grid items-center justify-center">
            <img className="g-4 p-4" src="Radio 4.svg" alt="Radio 4"></img>
            <img className="g-4 p-4" src="Radio 5.svg" alt="Radio 5"></img>
            <img className="g-4 p-4" src="Radio 5.svg" alt="Radio 5"></img>
          </div>
          <p className="mt-10">Number of Tickets</p>
          <form className="max-w-full mb-10 mt-5">
            <select id="number-of-tickets" className="bg-transparent border border-cyan-500 text-cyan-500 text-lg pl-10 rounded-md h-[49px] block w-full pr-10">
            <option className="bg-transparent">1</option>
         <option className="bg-transparent">2</option>
         <option className="bg-transparent">3</option>
         <option className="bg-transparent">4</option>
         <option className="bg-transparent">5</option>
         <option className="bg-transparent">6</option>
         <option className="bg-transparent">7</option>
         <option className="bg-transparent">8</option>
         <option className="bg-transparent">9</option>
            </select>
          </form>
          <div className="flex flex-col md:flex-row justify-center items-center  gap-4 mb-10">
            <Link href="./">
              <button className="border border-cyan-500 w-[266px] sm:w-[287px] h-[48px] px-24 rounded-[8px] text-[#24A0B5]">Cancel</button>
            </Link>
            <Link href="/Attendee-detail">
              <button className="border border-cyan-500 w-[266px] h-[48px] px-24 rounded-[8px] text-white bg-[#24A0B5]">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
