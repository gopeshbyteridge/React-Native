import {configureStore} from '@reduxjs/toolkit';
import UserDetails from './UserDetails';

export const store = configureStore({
  reducer: {
    UserDetail: UserDetails,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
