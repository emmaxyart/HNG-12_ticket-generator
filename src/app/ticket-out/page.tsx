import Link from "next/link";

export default function Ticketout() {
    return (
        <div className="main-container">
           <div className="flex flex-col md:flex-row justify-between mt-8 border border-cyan-500 m-auto px-4 md:px-12 pt-5 pb-12 w-full max-w-screen-lg h-76px rounded-[24px]">
        <span className="flex justify-start">
          <img className="w-30 mt-2" src="Frame 1618871078.svg" alt="Frame 1" />
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
            <div className="content w-full max-w-[700px] h-auto text-white rounded-[40px] p-6 shadow-lg mx-auto my-auto border border-cyan-500 relative mt-20 mb-20">
                <div className="flex justify-between w-full">
                    <p className="font-JejuMyeongjo text-[32px] text-left">Ready</p>
                    <p className="font-Roboto text-[16px] text-right">Step 3/3</p>
                </div>
                <div><img src="Progress container.svg" alt="Progress" /></div>
                <p className="font-Alatsi text-[32px] text-center mt-[40px] mb-[10px]">Your Ticket is Booked!</p>
                <p className="font-Roboto text-center text-[16px] mb-[12px]">Check your email for a copy or you can download</p>
                <div className="mb-12 relative grid place-items-center">
                    <img className="w-[fill] sm:w-400 h-300 md:w-[400px] mb-30" src="TICKET (1).svg" alt="Ticket" />
                    <div className="border border-cyan-500 w-full max-w-[300px] rounded-[16px] p-6 absolute mb-20 place-items-center text-center">
                        <p className="font-Road Rage text-[24px]">Techember Fest "25</p>
                        <p className="font-Roboto text-[12px]">📍 04 Rumens road, Ikoyi, Lagos</p>
                        <p className="font-Roboto text-[12px]">📅 March 15, 2025 | 7:00 PM</p>
                        <div className="w-[190px] h-[190px] border-4 border-cyan-500 rounded-[12px] text-center mt-6 mb-6"></div>
                        <div className="border border-cyan-500 w-full max-w-[232px] rounded-[8px] p-2">
                            <div className="grid grid-cols-2 gap-4 border-b border-gray-500 pb-2 divide-x divide-gray-500">
                                <div>
                                    <label className="text-gray-300 text-[12px] font-Roboto">Enter your name</label>
                                    <p className="font-bold text-[12px] font-Roboto">Avi Chukwu</p>
                                </div>
                                <div>
                                    <label className="text-gray-300 text-[11px] font-Roboto">Enter your email *</label>
                                    <p className="font-bold text-[11px] font-Roboto">User@email.com</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 border-b border-gray-500 pb-2 divide-x divide-gray-500">
                                <div>
                                    <label className="text-gray-300 text-[12px] font-Roboto">Ticket Type:</label>
                                    <p className="text-[10px] font-Roboto">VIP</p>
                                </div>
                                <div>
                                    <label className="text-gray-300 text-[12px] font-Roboto">Ticket for :</label>
                                    <p className="text-[15px] font-Roboto">1</p>
                                </div>
                            </div>
                            <div className="pt-2">
                                <label className="text-gray-300 text-[10px] font-Roboto">Special request?</label>
                                <p className="text-gray-300 text-[10px] font-Roboto">Nil ? Or the user's sad story they write in there gets this whole space, Max of three rows</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[-170px] sm:mt[-50] ml-8 place-items-center"><img className="max-w-full h-auto relative" src="Bar Code.svg" alt="Barcode" />
                </div>
                <div className="flex flex-col md:flex-row justify-center w-full gap-4 mb-10 mt-20">
                <Link href="/">
                    <button className="border border-cyan-500 w-full md:w-[296px] h-[48px] px-4 md:px-16 pt-4 pb-10 rounded-[8px] text-[#24A0B5]">
                        Book Another Ticket
                    </button>
                </Link>
                <Link href="/ready">
                    <button className="border border-cyan-500 w-full md:w-[296px] h-[48px] px-4 md:px-16 pt-4 pb-10 rounded-[8px] text-white bg-[#24A0B5]">
                        Download Ticket
                    </button>
                </Link>
            </div>
            </div>
            
        </div>
    );
}
