import { useState } from 'react';

const EntityManager = () => {
  const [newEntityName, setNewEntityName] = useState('');
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Entity Manager</h1>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder="Entity name..."
          value={newEntityName}
          onChange={(e) => setNewEntityName(e.target.value)}
        />
        
      </div>
    </div>
  );
};

export default EntityManager;