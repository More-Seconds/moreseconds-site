const ServicesMenu = () => {
  return (
    <div className="services-menu px-4 md:px-8 bg-black w-[450px]">
      <div className="min-h-screen flex items-center justify-center bg-black md:w-[300px] ml-7">
        <div className="bg-black w-full md:w-80 py-4">
          <h1 className="text-accent text-5xl font-bold mb-8 mx-2">
            I want to...
          </h1>
          <ul className="space-y-6">
            <li className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none  py-6 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
              Help My Clients With Their Websites
            </li>
            <li className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none  py-6 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
              Design a New Website
            </li>
            <li className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none  py-6 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
              Build a New Website
            </li>
            <li className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none  py-6 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
              Update an Existing Website
            </li>
            <li className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none  py-6 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
              Troubleshoot an Existing Website
            </li>
            <li className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none  py-6 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
              Host a Website
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServicesMenu
