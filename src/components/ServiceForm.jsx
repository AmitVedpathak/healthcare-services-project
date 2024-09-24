import React, { useState } from 'react';

const ServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert('Please fill in all fields.');
      return;
    }
    addService({ id: Date.now(), name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md mb-5">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Service Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="border border-gray-300 rounded p-2 w-full mb-4"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add Service
      </button>
    </form>
  );
};

export default ServiceForm;
