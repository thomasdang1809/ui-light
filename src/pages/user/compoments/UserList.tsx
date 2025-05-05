
import { useState } from "react";
import { useDelete, useFetch, useUpdate } from "../../../hooks/useApi"
export const UserList = () => {
  const { data: users = [] } = useFetch<any[]>('users', '/users');

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const deleteUser = useDelete(`/users?id=eq.${selectedId}`, 'users').mutate;
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
    </>


  )
}
