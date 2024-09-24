import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (id, updatedService) => {
    setServices(services.map(service => (service.id === id ? updatedService : service)));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-5">Healthcare Services</h1>
      <ServiceForm addService={addService} />
      <ServiceList services={services} updateService={updateService} deleteService={deleteService} />
    </div>
  );
}

export default App;
