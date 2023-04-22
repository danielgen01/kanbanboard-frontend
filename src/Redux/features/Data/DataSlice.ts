import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../../../../data.json";

// Definiere den Typen der Daten
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

// Definiere den Typen des Redux-Store
type State = {
  boards: Board[];
};

// Initialisiere den State mit den Daten aus der JSON-Datei
const initialState: State = {
  boards: data.boards
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Board>) => {
      state.boards.push(action.payload);
    },
    addTask: (state, action: PayloadAction<{ boardIndex: number; columnIndex: number; task: Task }>) => {
      const { boardIndex, columnIndex, task } = action.payload;
      state.boards[boardIndex].columns[columnIndex].tasks.push(task);
    },
    removeBoard: (state, action: PayloadAction<string>) => {
      const boardNameToRemove = action.payload;
      state.boards = state.boards.filter(board => board.name !== boardNameToRemove);
    },
  },

});

export const { addBoard, addTask, removeBoard } = dataSlice.actions;

export default dataSlice.reducer;
