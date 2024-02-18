export interface ITodo {
    id: number;
    name: string;
    completed: boolean;
}


export interface IHeader {
    screenWidth: number;
    changeMode?: () => void;
    darkMode?: boolean;
    state: ITodo;
    dispatch: React.DispatchWithoutAction;
}

// export interface IHeader {
//     screenWidth: number;
//     changeMode: () => void;
//     darkMode: boolean;
//     state: ITodo,
//     dispatch: {
//         type: string;
//         payload: string | React.KeyboardEvent<HTMLInputElement> | React.DispatchWithoutAction | number;

//     }[],

// }


export type ActionType = {
    type: string;
    payload: string;

}

// export type ActionType =
//   | { type: 'ADD_TASK'; payload: string }
//   | { type: 'DELETE_TASK'; payload: number }
  