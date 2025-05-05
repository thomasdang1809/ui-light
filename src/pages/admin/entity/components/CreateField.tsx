import { useState } from 'react';

export const AddFieldForm: React.FC<{ entityId: string }> = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('string');

 

  return (
    <div className="p-4">
      <input className="border mr-2" placeholder="Field name" value={name} onChange={(e) => setName(e.target.value)} />
      <select className="border mr-2" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
      </select>
     
    </div>
  );
};
