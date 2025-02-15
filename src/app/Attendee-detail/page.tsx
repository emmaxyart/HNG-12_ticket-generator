import Link from "next/link";
export default function Attendee() {
    return (
        <div className="main-container">
           <div className="flex flex-col md:flex-row justify-between mt-8 border border-cyan-500 m-auto px-4 md:px-12 pt-5 pb-12 w-full max-w-screen-lg  rounded-[24px]">
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
            <div className="content w-full max-w-[700px] text-white rounded-[40px] p-6 shadow-lg mx-auto border border-cyan-500 relative mt-20 mb-20">
                <div className="flex justify-between w-full">
                    <p className="font-JejuMyeongjo text-[32px] text-left">Attendee Details</p>
                    <p className="font-Roboto text-[16px] text-right">Step 2/3</p>
                </div>
                <div><img src="Progress container.svg" className="w-full" /></div>
                <div className="content w-full text-white rounded-[32px] p-6 shadow-lg mx-auto border border-cyan-500 mt-10 mb-16">
                    <p className="font-Roboto text-[16px]">Upload profile Photo</p>
                    <div className="bg-[#000000] w-full h-[220px] opacity-80 mt-10 place-items-center text-center">
                        <form className="max-w-md mx-auto bg-[#0E464F]">
                            <label className="block mb-2 text-sm font-medium text-bg-[#0E464F] dark:text-white" htmlFor="user_avatar"></label>
                            <input className="block w-full text-sm text-transparent-900 border border-bg-[#0E464F] rounded-lg h-60 cursor-pointer bg-[#0E464F] dark:text-gray-400 focus:outline-none dark:bg-background-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                            <div className="mt-1 text-sm text-bg-[#0E464F] dark:text-gray-300" id="user_avatar_help"></div>
                        </form>
                    </div>
                </div>
                <div className="border-none w-full bg-[#0E464F] h-1 rounded-[5px] mt-10 mb-6"></div>
                <form className="max-w-full mx-auto">
                    <div className="mb-8">
                        <label htmlFor="name" className="mb-2 text-md font-medium text-white-500 dark:text-white">Enter your name</label>
                        <input type="name" id="name" className="bg-[#07373F] border border-cyan-300 mt-4 text-white-500 text-md rounded-lg w-full p-2.5" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-2 text-md font-medium text-white-500 dark:text-white">Enter your email*</label>
                        <input type="email" id="email" className="bg-[#07373F] border border-cyan-300 mt-4 text-white-500 text-md rounded-lg w-full p-2.5" placeholder="hello@avioflagos.io" required />
                    </div>
                </form>
                <form>
                    <div className="mb-5">
                        <label htmlFor="text" className="mb-2 text-md font-medium text-white-500 dark:text-white">Special request?</label>
                        <textarea id="textfield" className="bg-[#07373F] border border-cyan-300 mt-4 text-white-500 text-md rounded-lg w-full h-[127px] p-2.5" placeholder="Textarea" required />
                    </div>
                </form>
                <div className="flex flex-col md:flex-row justify-evenly gap-4">
                    <Link href="./">
                        <button className="border border-cyan-500 w-full md:w-[296px] h-[48px] px-4 md:px-24 pt-4 pb-10 rounded-[8px] text-[#24A0B5]">Back</button>
                    </Link>
                    <Link href="/ticket-out">
                        <button className="border border-cyan-500 w-full md:w-[296px] h-[48px] px-4 md:px-16 pt-4 pb-10 rounded-[8px] text-white bg-[#24A0B5]">Get My Free Ticket</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
