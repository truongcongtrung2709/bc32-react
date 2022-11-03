import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../slides/movieSlice";

const ReduxThunk = () => {
  const { movies, loading, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // Call API
    //     const { data } = await axios.get(
    //       "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    //     );
    //     // Thành công => dispatch action để đưa data từ API lên store
    //     dispatch({ type: "get_movies", payload: { data } });
    //   } catch (error) {}
    // };
    // fetchData();

    // dispatch thunk action
    dispatch(getMovies());
  }, []);

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }
  return (
    <div className="container">
      {movies.map((item) => (
        <p key={item.maPhim}>{item.tenPhim}</p>
      ))}
    </div>
  );
};

export default ReduxThunk;
