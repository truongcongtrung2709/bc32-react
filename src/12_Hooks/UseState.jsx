import React, { useState } from 'react'
// useState: hook cho phép tạo và sử dụng state trong function component
// useState: chỉ có thể được sử dụng bên trong function component
// useState: phải được gọi ở cấp cao nhất trong component - không được nằm bên trong các block if-else, for, return, ...

const UseState = () => {
    // useState nhận vào một tham số xác định giá trị khởi tạo của state 
    // useState return về 1 array gồm 2 phần tử
    // - giá trị của state
    // - hàm dùng để thay đổi giá trị của state 
    const [message, setMessage] = useState("Hello BC32");
    const changeMessage = () => {
        const value = prompt("input your message: ");
        setMessage(value); // Update State Message
    };

// Để sử dụng nhiều state, ta gọi hook useState nhiều lần
const [count, setCount] = useState(0);
const increase = () =>{
    // Quá trình thay đổi state là bất đồng bộ, tuy nhiên nó không cung cấp tham số thứ 2 là 1 callback như setState của class Component

    //Cách 1: Nhận vào value
    // setCount(count + 1);

    // Cách 2: Nhận vào callback
    setCount((stateCount)=> stateCount + 1);

    //state là array
    
}

const [animals, setAnimals] = useState(["dog","cat"]);
const addAnimal = () => {
    const value = prompt("input animals: ")
    setAnimals([...animals, value]);
}
const removeAnimal = () => {
    const value = prompt("input animals: ")
    const newAnimals = animals.filter(item => item !== value)
    setAnimals(newAnimals);
}


// state là object
const [user, setUser] = useState({ username:"", email:""});
const handleChange = evt =>{
    const {name,value} = evt.target;
    setUser({...user,[name]:value});
}


  return (
    <div>
        <h1>useState</h1>
        <p>Message: {message}</p>
        <button  onClick={changeMessage}>Change Message</button>

        <br />
        <br />

        <p>Count: {count}</p>
        
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        <button className='mx-2'  onClick={increase}>Increase</button>

        <br />
        <br />

        <p>Animal: {animals.join(",")}</p>
        <button onClick={addAnimal}>Add Animal</button>
        <button onClick={removeAnimal}>Remove Animal</button>

        <br/>
        <br/>

        <form>
            <input type="text"
             placeholder='Username'
             value={user.username}
             name="username"
             onChange={handleChange} />

            <input type="text"
             placeholder='Email'
             value={user.email}
             name="Email"
             onChange={handleChange} />
        </form>

    </div>
  )
}

export default UseState