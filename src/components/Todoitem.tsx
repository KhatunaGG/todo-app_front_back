
import React from 'react';
import { ITodo } from '../types'


interface ITodoitem extends ITodo {
    screenWidth: number;
    deliteTodo: (id: number) => void
    makeCompleted: (id: number) => void

}

const Todoitem: React.FC<ITodoitem> = (props) => {

    const { screenWidth, id, title, completed, deliteTodo, makeCompleted } = props


    return (
        <div key={id} className="item w-full flex flex-row items-center justify-between  border-b border-[#E3E4F1] py-4 px-5 md:py-[19px] dark:border-[#C8CBE7]">
            {completed
                ? <img
                    onClick={() => makeCompleted(id)}
                    style={{ width: screenWidth > 374 ? '24px' : '20px', height: screenWidth > 374 ? '24px' : '20px', background: 'transparent' }}
                    src={screenWidth > 374 ? '/assets/check-icon.png' : '/assets/check-icon.png'} alt="" /> : (
                    <div
                        onClick={() => makeCompleted(id)}
                        className="w-5 h-5 rounded-full border border-[#E3E4F1] md:w-6 md:h-6 dark:border  dark:border-[#C8CBE7]"></div>
                )}

            <p className="text text-left w-full ml-3 text-xs font-normal text-[#494C6B] md:text-lg md:tracking-[-0.25px]
            dark:text-[#C8CBE7]">{title}</p>
            <img
                onClick={() => deliteTodo(id)}

                src={screenWidth > 374 ? '/assets/del-desktop-icon.svg' : '/assets/del-mobile-icon.svg'} alt="" />
        </div>
    )
}

export default Todoitem