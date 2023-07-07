import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "./slices/userSlice"
import postsReducer from "./slices/postSlice"

export default configureStore({reducer:{users:usersReducer, posts:postsReducer}})