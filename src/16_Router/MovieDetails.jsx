import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  // useParams: custom Hook để lấy dynamic params từ trên url xuống dưới và chuyển thành state của component
  const {movieId} = useParams();

  useEffect(()=> {
    //gọi action lấy thông tin chi tiết phim
    //dispatch(getMovieDetails(movieId))

  },[movieId])
  return (
    <div>
      <h1>MovieDetails</h1>

      <h3>ID: {movieId}</h3>
    </div>
  )
}

export default MovieDetails