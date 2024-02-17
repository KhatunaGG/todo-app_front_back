import { useReducer, useState } from "react";


type HeaderPropsType = {
    screenWidth: number;
    changeMode: () => void;
    darkMode: boolean;
}

type InitialStateType = [
    {
        task: string;
        id: number;
        completed: boolean
    }
]


type ActionType = {
    type: string;
    payload: string;
}

const initialState: InitialStateType[] = []






const reduce = (state: InitialStateType, action: ActionType) => {
    // const newtask = {
    //     newTask: task;
    // }

}

const Header = ({ screenWidth, changeMode, darkMode }: HeaderPropsType) => {

    const [task, setTask] = useState('')

    const [state, dispatch] = useReducer(reduce, initialState)
    console.log(task)





    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            

        }
    }




    return (
        <section className="container w-[87.2%]  flex flex-col item-center justify-center absolute  top-10 mx-6 md:w-[540px] md:top-[70px] ">
            <div className="header w-full flex items-center justify-between mb-10 cursor-pointer">
                <img src={screenWidth > 374 ? "/assets/todo-logo-desktop.svg" : "/assets/todo-logo-mobile.svg"} alt="" />
                {screenWidth > 374 ?
                    (<img style={{
                        transform: `rotate(${!darkMode ? '360deg' : '0deg'})`,
                        transition: 'transform 0.5s ease'
                    }}
                        // onClick={changeMode} 
                        src={darkMode ? "/assets/moon-desktop.svg" : "/assets/sun-desktop.svg"} alt="" />)
                    :
                    (<img style={{
                        transform: `rotate(${!darkMode ? '360deg' : '0deg'})`,
                        transition: 'transform 0.5s ease'
                    }}
                        // onClick={changeMode} 
                        src={darkMode ? "/assets/moon-mobile.svg" : "/assets/sun-mobile.svg"} alt="" />)
                }
            </div>
            <input
                onChange={(e) => setTask(e.target.value)}
                className="border rounded-md pl-5 py-3.5 border-none overflow-hidden shadow-lg outline-none mb-4 md:mb-6 md:text-lg md:py-5
             dark:border-b dark:bg-[#393A4B] dark:shadow-none dark:duration-300 dark:text-[#C8CBE7]" type="text" placeholder="Create a new todo…" />
            <article className="taskwrapper w-full  rounded-md bg-white shadow-lg mb-4 dark:bg-[#393A4B] dark:duration-300 ">





                <div className="item w-full flex flex-row items-center justify-between  border-b border-[#E3E4F1] py-4 px-5 md:py-[19px] dark:border-[#C8CBE7]">
                    <div className="w-5 h-5 rounded-full border border-[#E3E4F1] md:w-6 md:h-6 dark:border  dark:border-[#C8CBE7]"></div>
                    <p className="text text-left w-full ml-3 text-xs font-normal text-[#494C6B] md:text-lg md:tracking-[-0.25px]  dark:text-[#C8CBE7]">sssssssg</p>
                    <img src={screenWidth > 374 ? '/assets/del-desktop-icon.svg' : '/assets/del-mobile-icon.svg'} alt="" />
                </div>















                <div className="footer-desktop w-full flex flex-row items-center justify-between rounded-b-md 
                 border-b border-[#E3E4F1] px-5 pt-4 pb-[22px] shadow-md md:py-4 dark:shadow-none dark:bg-[#393A4B] dark:duration-300 ">
                    <button className="text-xs font-normal text-[#9495A5] tracking-[-0.17px] md:text-sm md:tracking-[-0.19px] hover:text-[#3A7CFD] dark:hover:text-[#C8CBE7]">0 items left</button>
                    {screenWidth > 375 && (
                        <div className="item flex flex-row items-center justify-center gap-[19px] border-[#E3E4F1] ">
                            <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px] hover:text-[#3A7CFD] dark:hover:text-[#C8CBE7]">All</button>
                            <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px] hover:text-[#3A7CFD] dark:hover:text-[#C8CBE7]">Active</button>
                            <button className="text-sm font-bold text-[#9495A5] tracking-[-0.19px] hover:text-[#3A7CFD] dark:hover:text-[#C8CBE7]">Completede</button>
                        </div>
                    )}
                    <button className="text-xs font-normal text-[#9495A5] tracking-[-0.17px] md:text-sm md:tracking-[-0.19px] hover:text-[#3A7CFD] dark:hover:text-[#C8CBE7]">Clear Completed</button>
                </div>
            </article>



            {screenWidth < 375 && (
                <div className="footer-mobile w-full flex flex-row items-center justify-center gap-[19px] rounded-md shadow-lg
                    border-b border-[#E3E4F1] px-4 py-4  bg-white dark:border-b dark:border-[#C8CBE7] dark:bg-[#393A4B] dark:duration-300 ">
                    <button className="text-sm font-bold text-[#9495A5] hover:text-[#3A7CFD] tracking-[-0.19px] dark:hover:text-[#C8CBE7]">All</button>
                    <button className="text-sm font-bold text-[#9495A5] hover:text-[#3A7CFD] tracking-[-0.19px] dark:hover:text-[#C8CBE7]">Active</button>
                    <button className="text-sm font-bold text-[#9495A5] hover:text-[#3A7CFD] tracking-[-0.19px] dark:hover:text-[#C8CBE7]">Completede</button>
                </div>
            )}





        </section>











    )
}

export default Header