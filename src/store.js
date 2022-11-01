// setup redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// reducers
import countReducer from "./reducers/countReducer";
import messageReducer from "./reducers/messageReducer";
// import baucuaReducer from "./reducers/baucuaReducer";

import movieReducer from "./reducers/movieReducer";

//slides
import baucuaReducer from "./slides/bauCuaSlide";

//configureStore
// - tự động setup redux devtool, ta có thể overide thông qua key devools,
// - tự động setup middleware là redux-thunk
const store = configureStore({
  reducer: {
    count: countReducer,
    message: messageReducer,
    baucua: baucuaReducer,
    movie: movieReducer,
  },
  // devTools: false // mặc định là true
});

export default store;
