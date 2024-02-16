

type HeaderPropsType = {
    screenWidth: number;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
}

const Header = ({ screenWidth, setDarkMode, darkMode }: HeaderPropsType) => {
    return (

        <section className="container w-[87.2%] flex flex-col item-center justify-center absolute top-10 mx-6 md:w-[540px] md:top-[70px] ">
            {/* {screenWidth > 374
                ? (
                    <div className="header w-full flex items-center justify-between mb-12">
                        <img 
                        onClick={() => setDarkMode(!false)}
                        src="/assets/todo-logo-mobile.svg" alt="" />
                        <img 
                        onClick={() => setDarkMode(!false)}
                        src="/assets/moon-desktop.svg" alt=""
                        className="cursor-pointer"
                        />
                    </div>
                )
                : (
                    <div className="header w-full flex items-center justify-between mb-10">
                        <img src="/assets/todo-logo-mobile.svg" alt="" />
                        <img src="/assets/moon-desktop.svg" alt="" />
                    </div>
                )} */}



            <div className="header w-full flex items-center justify-between mb-10">
                <img src={screenWidth > 374 ? "/assets/todo-logo-desktop.svg" : "/assets/todo-logo-mobile.svg"} alt="" />
                <img src={screenWidth > 374 ? "/assets/moon-desktop.svg" : "/assets/moon-mobile.svg"} alt="" />
            </div>










            <input className="border rounded-md pl-5 py-3.5 border-none overflow-hidden shadow-lg outline-none mb-4 md:mb-6" type="text" placeholder="Create a new todo…" />




            <article className="taskwrapper w-full  rounded-md bg-white shadow-lg">

                <div className="item w-full flex flex-row items-center justify-between  border-b border-[#E3E4F1] py-4 px-5">
                    <div className="w-5 h-5 rounded-full border border-[#E3E4F1] md:w-6 md:h-6  "></div>
                    <p className="text text-left w-full ml-3 text-xs font-normal text-[#494C6B] md:text-lg md:tracking-[-0.25px]">sssssssg</p>
                    <img src={screenWidth > 374 ? '/assets/del-desktop-icon.svg' : '/assets/del-mobile-icon.svg'} alt="" />
                </div>


                <div className="item w-full flex flex-row items-center justify-between  border-b border-[#E3E4F1] py-4 px-5">
                    <div className="w-5 h-5 rounded-full border border-[#E3E4F1] md:w-6 md:h-6  "></div>
                    <p className="text text-left w-full ml-3 text-xs font-normal text-[#494C6B] md:text-lg md:tracking-[-0.25px]">sssssssg</p>
                    <img src={screenWidth > 374 ? '/assets/del-desktop-icon.svg' : '/assets/del-mobile-icon.svg'} alt="" />
                </div>









                <div className="footer-desktop w-full flex flex-row items-center justify-between rounded-b-md border-b border-[#E3E4F1] px-5 pt-4 pb-[22px] shadow-md md:py-4 ">
                    <button className="text-xs font-normal text-[#9495A5] tracking-[-0.17px] md:text-sm md:tracking-[-0.19px] ">0 items left</button>
                    {screenWidth > 375 && (

                        <div className="item flex flex-row items-center justify-center gap-[19px]  border-[#E3E4F1]">
                            <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px]">All</button>
                            <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px]">Active</button>
                            <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px]">Completede</button>
                        </div>
                    )}
                    <button className="text-xs font-normal text-[#9495A5] tracking-[-0.17px] md:text-sm md:tracking-[-0.19px] ">Clear Completed</button>
                </div>

                {screenWidth < 375 && (
                    <div className="footer-mobile w-full flex flex-row items-center justify-center gap-[19px] rounded-b-md  border-b border-[#E3E4F1] px-4 pt-4 pb-[22px] shadow-sm">
                        <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px]">All</button>
                        <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px]">Active</button>
                        <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px]">Completede</button>
                    </div>
                )}
            </article>
        </section>







    )
}

export default Header