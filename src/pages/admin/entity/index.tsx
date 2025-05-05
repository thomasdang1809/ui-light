import React, {  useState } from 'react';


const AdminEntitiesPage: React.FC = () => {
 
  const [newEntity, setNewEntity] = useState('');


  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Entities</h1>

      <div className="mb-4 flex gap-2">
        <input
          className="border px-2 py-1"
          placeholder="Entity name (e.g. products)"
          value={newEntity}
          onChange={(e) => setNewEntity(e.target.value)}
        />
       
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default AdminEntitiesPage;
