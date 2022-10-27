import React from 'react'
import { useSelector } from 'react-redux'
import QuanCo from './QuanCo'

const BanCo = () => {
  const {danhSachCuoc} = useSelector((state)=> state.baucua)


  return (
    <div className='row'>
      {danhSachCuoc.map((item)=>(
        <div key={item.ma} className="col-sm-4">
          <QuanCo item={item}/>
        </div>
      ))}

  
    </div>
  )
}

export default BanCo