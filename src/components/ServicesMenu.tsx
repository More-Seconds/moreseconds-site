type ServicesMenuProps = {
  handleMenuItemClicked: (menuItem: string) => void
}

const ServicesMenu = (props: ServicesMenuProps) => {
  const { handleMenuItemClicked } = props

  return (
    <div className="services--menu px-4 md:px-8  w-[410px] z-999">
      <div className="flex items-start mt-8 justify-center xl:w-[300px]">
        <div className="bg-translucent w-full md:w-80">
          <h1 className="text-accent text-5xl font-bold mb-8 mx-2">
            I want to...
          </h1>
          <ul className="space-y-6">
            <li
              onClick={() => handleMenuItemClicked('Client Website Help')}
              className="bg-translucent text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Help My Clients With Their Websites
            </li>
            <li
              onClick={() => handleMenuItemClicked('Website Design')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Design a New Website
            </li>
            <li
              onClick={() => handleMenuItemClicked('Website Development')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Build a New Website
            </li>
            <li
              onClick={() => handleMenuItemClicked('Update Website')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Update an Existing Website
            </li>
            <li
              onClick={() => handleMenuItemClicked('Troubleshoot Website')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Troubleshoot an Existing Website
            </li>
            <li
              onClick={() => handleMenuItemClicked('Host Website')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Host a Website
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServicesMenu
