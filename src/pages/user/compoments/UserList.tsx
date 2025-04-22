
import { useState } from "react";
import { useDelete, useFetch, useUpdate } from "../../../hooks/useApi"
export const UserList = () => {
  const { data: users = [] } = useFetch<any[]>('users', '/users');
  const { data: products = [] } = useFetch<any[]>('products', '/products');
  const { data: testimonials = [] } = useFetch<any[]>('testimonials', '/testimonials');

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const deleteUser =  useDelete(`/users/${selectedId}`, 'users').mutate
  const updateUser = useUpdate(`/users/${selectedId}`, 'users').mutate
  const handleUpdate = (userId: string) => {
    const newName = prompt('Nhập tên mới:')

    if (newName) {
      setSelectedId(userId);
      updateUser({ name: newName })
    }
  }
  
  const handleDelete = (userId: string) => {
    setSelectedId(userId);
    deleteUser();
  }
  
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>

            <img src={user.image} width={32} style={{ borderRadius: '50%' }} />
            {user.id}:{user.name} - {user.email}
            <button onClick={() => handleUpdate(user.id)}>Cập nhật</button>{' '}
            <button onClick={() => handleDelete(user.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <hr />
      <div className="grid auto-fit gap-3">
        {products.map(product => (
          <div key={product.id} className="card">
            <div className="card-image">
            <img src={product.thumbnail} style={{width:'100%'}} />
            </div>
            <div className="card-body">
              <h6>{product.name}. ratings: {product.rating}</h6>
              <p>${product.discountPrice} - $<span style={{ textDecoration: 'line-through' }}>{product.price}</span></p>

            </div>

          </div>
        ))}
      </div>
      <ul>
        {testimonials.map(testimonial => (
          <li key={testimonial.id}>
            <img src={testimonial.image} width={32} style={{ aspectRatio: '1/1', borderRadius: '50%', backgroundSize: 'contain' }} />
            {testimonial.name} - {testimonial.company}
            <div>{testimonial.text}</div>
          </li>
        ))}
      </ul>
    </>


  )
}
