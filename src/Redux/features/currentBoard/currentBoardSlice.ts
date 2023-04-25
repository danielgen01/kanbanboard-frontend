import { createSlice } from "@reduxjs/toolkit"
import data from "../../../../data.json"

type Board = {
  name: string;
  columns: Column[];
};

type Column = {
  name: string;
  tasks: Task[];
};

type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

type Subtask = {
  title: string;
  isCompleted: boolean;
};

type CurrentBoardState = {
  currentBoard: Board;
};

// Definiere den Typen des Redux-Store
type RootState = {
  currentBoard: CurrentBoardState;
};

const initialState: CurrentBoardState = {
  currentBoard: data.boards[0],
};


const currentBoardSlice = createSlice({
  name: "currentBoard",
  initialState,
  reducers: {
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
    setCurrentBoardName: (state, action) => {
      state.currentBoard = {
        ...state.currentBoard,
        name: action.payload,
      };
    },
    setBoardTasks: (state, action) => {
      state.currentBoard = {
        ...state.currentBoard,
        columns: action.payload,
      };
    },
  },
});

export const { setCurrentBoard, setCurrentBoardName, setBoardTasks } =
  currentBoardSlice.actions;

export default currentBoardSlice.reducer;
