import { useState } from "react";
import Todoitem from "./Todoitem";
import { ITodo } from "../types";
import { IHeader } from "../types";


const Header = ({ screenWidth, changeMode, darkMode }: IHeader) => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])
    console.log(todos)
    const addTodos = () => {

        if (value) {
            setTodos([...todos, {
                id: +(Math.random() * 10).toFixed(),
                title: value,
                completed: false
            }])

        }
        setValue('')
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodos()
        }    
    }

    const deliteTodo = (id: number) => {
        setTodos(todos.filter((el) => el.id !== id))
    }


    const makeCompleted = (id: number) => {
        setTodos(todos.map((el) => {
            if(el.id !== id) return el;
            return {...el, completed: !el.completed}
        }))
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
                        onClick={changeMode}
                        src={darkMode ? "/assets/moon-desktop.svg" : "/assets/sun-desktop.svg"} alt="" />)
                    :
                    (<img style={{
                        transform: `rotate(${!darkMode ? '360deg' : '0deg'})`,
                        transition: 'transform 0.5s ease'
                    }}
                        onClick={changeMode}
                        src={darkMode ? "/assets/moon-mobile.svg" : "/assets/sun-mobile.svg"} alt="" />)
                }
            </div>
            <input
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                value={value}
                className="border rounded-md pl-5 py-3.5 border-none overflow-hidden shadow-lg outline-none mb-4 md:mb-6 md:text-lg md:py-5
             dark:border-b dark:bg-[#393A4B] dark:shadow-none dark:duration-300 dark:text-[#C8CBE7]" type="text" placeholder="Create a new todo…" />
            <article className="taskwrapper w-full  rounded-md bg-white shadow-lg mb-4 dark:bg-[#393A4B] dark:duration-300 ">


                {todos.map((item) => (
                    <Todoitem
                    key={item.id}
                    {...item}
                    deliteTodo={deliteTodo}
                    makeCompleted={makeCompleted}
                    // id={item.id}
                    // title={item.title}
                    // completed={item.completed}
                    screenWidth={screenWidth} />
                ))}





                {/* <div className="item w-full flex flex-row items-center justify-between  border-b border-[#E3E4F1] py-4 px-5 md:py-[19px] dark:border-[#C8CBE7]">
                    <div className="w-5 h-5 rounded-full border border-[#E3E4F1] md:w-6 md:h-6 dark:border  dark:border-[#C8CBE7]"></div>
                    <p className="text text-left w-full ml-3 text-xs font-normal text-[#494C6B] md:text-lg md:tracking-[-0.25px]  dark:text-[#C8CBE7]">sssssssg</p>
                    <img src={screenWidth > 374 ? '/assets/del-desktop-icon.svg' : '/assets/del-mobile-icon.svg'} alt="" />
                </div> */}















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