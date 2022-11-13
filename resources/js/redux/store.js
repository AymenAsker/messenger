import { configureStore } from "@reduxjs/toolkit";
import conversations from "./slices/conversationSlice";
import messages from "./slices/messageSlice";
import auth from "./slices/authSlice";

export default configureStore({
  reducer: {
    conversations,
    messages,
    auth,
  },
});
