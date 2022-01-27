import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../reducers/appReducer";

export const store = configureStore({
  reducer: { appSlice },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
