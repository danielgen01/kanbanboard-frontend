import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from './features/Sidebar/sidebarSlice';
import newBoardFormReducer from './features/NewBoardForm/NewBoardFormSlice';

const rootReducer = combineReducers({
    sidebar:sidebarReducer,
    newboardform:newBoardFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
