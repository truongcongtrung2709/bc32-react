import axios from 'axios';
import {useState, useEffect} from 'react'
import useCounter from './useCounter';
import useWindowSize from './useWindowSize';
import useRequest from './useRequest';

const CustomHooks = () => {
  // const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count+1);
  // const handleDecrease = () => setCount(count-1);

  const {count, handleDecrease, handleIncrease} = useCounter(0);

  const size = useWindowSize();
 

  // const [data, setData] = useState();

  // useEffect(() =>{
  //   const fetchData = async () => {
  //     try {
  //       const resp = await axios.get("https://api.github.com/users/danndz");
  //       setData(resp.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // },[])

  const {data = {}} = useRequest(async ()=>{

 const data = await axios.get("https://api.github.com/users/danndz")
 return data;
},
{deps:[count]}
);

  return (
    <div>
      <h1>CustomHooks</h1>

      <p>Count: {count}</p>
      <button className='btn btn-danger' onClick={handleDecrease}>Decrease</button>
      <button className='btn btn-success mx-2' onClick={handleIncrease}>Increase</button>


      <br />
      <br />

      <p>Size: {size.width} -{size.height}</p>
      <span>{size.width < 768 ? "Mobile" : "Desktop"}</span>

      <br />
      <br />

      <p>Name: {data.name}</p>
    </div>
  )
}

export default CustomHooks