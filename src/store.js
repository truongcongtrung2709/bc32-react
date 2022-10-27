// file cấu hình redux store
import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import messageReducer from "./reducers/messageReducer";
import baucuaReducer from "./reducers/baucuaReducer";
// reducer nhận vào 2 tham số:
// - Giá trị hiện tại của state trong store
// - object action dùng để mô tả ta muốn thay đổi state như thế nào
// reducer sẽ tự động được thực thi khi store được khởi tạo và mỗi khi ta dispatch 1 action

//combineReducers: hàm kết hợp các reducer con thành reducer tổng
const reducer = combineReducers({
  count: countReducer,
  message: messageReducer,
  baucua: baucuaReducer,
});

// Key của các Reducer con sẽ được khai báo là key trong object state
// state = {count: 0, message: ""}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// =======================Ví dụ sử dụng redux ===================

// // subscribe: Hàm nhận vào tham số là 1 callback function, callback sẽ được gọi tới sau khi state bị thay đổi
// store.subscribe(() => {
//   console.log("redux state sau khi được thay đổi:", store.getState());
// });

// // getState(): Hàm dùng để lấy giá trị state của store
// console.log("redux state:", store.getState());

// // dispatch(): Hàm dùng để gửi 1 action vào store để cập nhật state
// // action là một object có 1 key bắt buộc là type dùng để mô tả ta muốn thay đổi state như thế nào
// store.dispatch({ type: "increase_count" });

// // YC: thay đổi state của count - 1
// store.dispatch({ type: "decrease_count" });
