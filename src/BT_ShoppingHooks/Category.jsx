import {Form} from 'react-bootstrap'

const Category = ({categories, onSelect}) => {
  return (
    <div className='d-flex'>
    <Form.Select onChange={(evt)=>(onSelect(evt.target.value))}>
      <option value="">Chọn Danh Mục</option>
      {categories.map((item)=> (
        <option value={item.id} key={item.id}>
          {item.category}
          </option>
      ))}
    </Form.Select>
    </div>
  )
}

export default Category