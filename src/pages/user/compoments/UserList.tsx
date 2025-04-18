
import { useState } from "react";
import { useDelete, useFetch, useUpdate } from "../../../hooks/useApi"
export const UserList = () => {
  const { data: users } = useFetch<any[]>('users', '/users');
  const { data: posts } = useFetch<any[]>('products', '/products');
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
  if (!Array.isArray(users)) {
    return <p>Dữ liệu không hợp lệ</p>
  }

  if (!Array.isArray(posts)) {
    return <p>Dữ liệu không hợp lệ</p>
  }

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>

            <img src={user.image} width={32} style={{ borderRadius: '50%' }} />
            {user.id}:{user.name} - {user.email}
            <button onClick={() => handleUpdate(user.id)}>✏️ Cập nhật</button>{' '}
            <button onClick={() => handleDelete(user.id)}>❌ Xóa</button>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <img src={post.image} width={32} style={{ aspectRatio: '1/1', borderRadius: '50%', backgroundSize: 'contain' }} />
            {post.name} - {post.email}
          </li>
        ))}
      </ul>
    </>


  )
}
