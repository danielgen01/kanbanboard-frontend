import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoBox {
  id: any;
  title: string;
  description: string;
  subtasks: Subtask[];
}

interface TodoState {
  todoItems: TodoBox[];
}

const initialState: TodoState = {
  todoItems: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addBox(state, action: PayloadAction<TodoBox>) {
      state.todoItems.push(action.payload);
    },
    removeBox(state, action: PayloadAction<string>) {
      const index = state.todoItems.findIndex(box => box.id === action.payload);
      if (index !== -1) {
        state.todoItems.splice(index, 1);
      }
    },
    moveBox(state, action: PayloadAction<{ id: string, newIndex: number }>) {
      const { id, newIndex } = action.payload;
      const currentIndex = state.todoItems.findIndex(box => box.id === id);
      if (currentIndex === -1) return;
      const [box] = state.todoItems.splice(currentIndex, 1);
      state.todoItems.splice(newIndex, 0, box);
    },
    updateBox(state, action: PayloadAction<TodoBox>) {
      const index = state.todoItems.findIndex(box => box.id === action.payload.id);
      if (index !== -1) {
        state.todoItems[index] = action.payload;
      }
    }
  }
});

export const { addBox, removeBox, moveBox, updateBox } = todoSlice.actions;

export default todoSlice.reducer;
