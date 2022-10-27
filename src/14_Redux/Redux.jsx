import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// useSelector: là một custom hooks của react-redux giúp lấy state từ redux store về component
// useDispatch: là một custom hooks của react-redux dùng để gửi 1 action thay đổi state lên store

const Redux = () => {
    // useSelector: nhận vào tham số là một callback, callback có tham số là giá trị state của store
    const {count, message} = useSelector((state) => {
        // Những gì ta return bên trong callback sẽ được trả ra là state của component
        return state;
    });

    const dispatch = useDispatch();
        // Gọi hàm dispatch và truyền vào action để gửi lên store
    const handleIncrease = () =>{
        dispatch({type: 'increase_count'});
    }
    const handleDecrease = () =>{
        dispatch({type: 'decrease_count'});
    }

    const handleChangeMessage = () =>{
        const msg = prompt("Input Message:");
        dispatch({type:"change_message", data: msg});
    }
  return (
    <div>
        <h1>Redux</h1>
        <p>Count: {count}</p>
        <button className='btn btn-danger' onClick={handleDecrease}>Decrease</button>
        <button className='btn btn-success' onClick={handleIncrease}>Increase</button>


        <p>Message: {message}</p>
        <button className='btn btn-primary' onClick={handleChangeMessage}>Change Message</button>
    </div>
  )
}

export default Redux