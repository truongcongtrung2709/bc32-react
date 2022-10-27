import {useState} from 'react'

// custom hooks: là những hooks do mình tự định nghĩa để thực hiện một logic nào đó, thường được sử dụng để chia sẻ logic giữa các component
// custom hooks phải được đặt tên theo format có từ khoá use ở đầu, VD: useCounter, use...

// - Khác với component, custom hooks không return về UI(jsx) mà sẽ return về một dữ liệu nào đó (string, number, array, object,...)
// - Khác với function thông thường, custom hooks được phép sử dụng các react hooks (useState, useEffect,...)


const useCounter = () => {
    const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1);
  return {count, handleIncrease, handleDecrease};
}

export default useCounter