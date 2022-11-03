import axios from "axios";

// Action bình thường mà redux cho phép, chỉ được return về plain object
// const getMovies = (data) => {
//   return {
//     type: "get_movies",
//     payload: {data}
//   }
// }

export const getMovies = () => {
  // thunk action
  // Khi sử dụng redux-thunk, nó cho phép action return về một async function
  // function này nhận vào 2 tham số: dispatch, getState
  return async (dispatch, getState) => {
    try {
      // Trước khi request API, dispatch action pending
      dispatch({ type: "get_movies/pending" });

      const { data } = await axios.get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      );

      // Call API thành công, dispatch action chứa data từ API
      // Lúc này action này mới được đưa vào store
      dispatch({ type: "get_movies/fulfilled", payload: { data } });
    } catch (error) {
      dispatch({
        type: "get_movies/rejected",
        payload: {
          // error.response.data là format của axios
          error:
            error.response.data || "Something went wrong, please try later!!!",
        },
      });
    }
  };
};
