import { useState } from 'react';

export const CreateEntityForm: React.FC = () => {
  const [name, setName] = useState('');



  return (
    <div className="p-4">
      <input
        className="border px-2 py-1 mr-2"
        placeholder="Entity name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
    </div>
  );
};
