import React, { useState } from 'react';

const ServiceList = ({ services, updateService, deleteService }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [currentService, setCurrentService] = useState({ name: '', description: '', price: '' });

  const handleEdit = (service) => {
    setIsEditing(service.id);
    setCurrentService(service);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateService(currentService.id, currentService);
    setIsEditing(null);
  };

  return (
    <ul className="mt-5">
      {services.map(service => (
        <li key={service.id} className="bg-white rounded-lg p-4 shadow-md mb-4">
          {isEditing === service.id ? (
            <form onSubmit={handleUpdate} className="flex flex-col">
              <input
                type="text"
                value={currentService.name}
                onChange={(e) => setCurrentService({ ...currentService, name: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mb-2"
              />
              <input
                type="text"
                value={currentService.description}
                onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mb-2"
              />
              <input
                type="number"
                value={currentService.price}
                onChange={(e) => setCurrentService({ ...currentService, price: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mb-4"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Update Service
              </button>
              <button type="button" onClick={() => setIsEditing(null)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2">
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-green-500 font-bold">Price: ${service.price}</p>
              <div className="mt-2">
                <button 
                  onClick={() => handleEdit(service)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                >
                  Update
                </button>
                <button 
                  onClick={() => deleteService(service.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
