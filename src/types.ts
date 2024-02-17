export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}


// export type HeaderPropsType = {
//     screenWidth: number;
//     changeMode: () => void;
//     darkMode: boolean;
// }

export interface IHeader {
    screenWidth: number;
    changeMode?: () => void;
    darkMode?: boolean;
}