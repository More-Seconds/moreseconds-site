type ServicesMenuProps = {
  handleMenuItemClicked: (menuItem: string) => void
};

const ServicesMenu = (props: ServicesMenuProps) => {
  const { handleMenuItemClicked } = props;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMobile = window.innerWidth <= 768; 

  const handleMenuItemClick = (menuItem: string, sectionId: string) => {
    handleMenuItemClicked(menuItem);
    if (isMobile) {
      scrollToSection(sectionId);
    }
  };



  return (
    <div className="services--menu px-6 w-full md:w-[410px] z-999">
      <div className="flex items-start mt-8 justify-center xl:w-[300px]">
        <div className="bg-translucent w-full md:w-80">
          <h1 className="text-accent text-3xl lg:text-5xl font-bold mb-8 mx-2">
            I want to...
          </h1>
          <ul className="space-y-6">
          <li
        onClick={() => handleMenuItemClick('Client Website Help', 'white-label-service')}
        className="bg-translucent text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
      >
        Help My Clients With Their Websites
      </li>
            <li
              onClick={() => handleMenuItemClick('Website Design', 'website-design')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Design a New Website
            </li>
            <li
              onClick={() => handleMenuItemClick('Website Development', 'website-builds')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Build a New Website
            </li>
            <li
              onClick={() => handleMenuItemClick('Update Website', 'website-updates')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Update an Existing Website
            </li>
            <li
              onClick={() => handleMenuItemClick('Troubleshoot Website', 'website-maintenance')}
              className="bg-black text-white rounded-2xl border-tl-2xl shadow-[5px_5px_0px_#ff7e22] border border-l-1 border-accent rounded-l-none py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Troubleshoot an Existing Website
            </li>
            <li
              onClick={() => handleMenuItemClick('Host Website', 'website-hosting')}
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
