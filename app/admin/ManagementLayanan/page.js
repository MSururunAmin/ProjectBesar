"use client";
import { useState, useEffect } from "react";

const AdminManageServices = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState("");
  const [editingService, setEditingService] = useState(null);
  const [serviceName, setServiceName] = useState("");

  useEffect(() => {
    // Simulasi pengambilan data layanan
    const fetchServices = async () => {
      try {
        // Ganti dengan API yang sesungguhnya
        // const response = await fetch('/api/services');
        // const data = await response.json();

        // Simulasi data layanan
        const data = [
          { id: 1, name: "Hosting Request" },
          { id: 2, name: "TIK Recommendation" },
          { id: 3, name: "Account Reset" },
        ];

        setServices(data);
      } catch (err) {
        console.error("Gagal mengambil data layanan.");
      }
    };

    fetchServices();
  }, []);

  const handleAddService = () => {
    if (!newService) return;
    const newId = services.length + 1;
    setServices([...services, { id: newId, name: newService }]);
    setNewService("");

    // Simpan ke server menggunakan API
    // await fetch('/api/services', { method: 'POST', body: JSON.stringify({ name: newService }) });
  };

  const handleDeleteService = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);

    // Hapus dari server menggunakan API
    // await fetch(`/api/services/${id}`, { method: 'DELETE' });
  };

  const handleEditService = (id, name) => {
    setEditingService(id);
    setServiceName(name);
  };

  const handleUpdateService = () => {
    const updatedServices = services.map((service) =>
      service.id === editingService
        ? { ...service, name: serviceName }
        : service
    );
    setServices(updatedServices);
    setEditingService(null);
    setServiceName("");

    // Simpan perubahan ke server menggunakan API
    // await fetch(`/api/services/${editingService}`, { method: 'PUT', body: JSON.stringify({ name: serviceName }) });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="bg-white p-4 shadow-md mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Manajemen Layanan
          </h1>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </nav>

      <main className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Daftar Layanan
        </h2>

        {/* Form untuk menambahkan layanan baru */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Tambahkan Layanan Baru
          </h3>
          <div className="flex">
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              placeholder="Nama layanan baru"
              className="p-2 border rounded-lg w-full"
            />
            <button
              onClick={handleAddService}
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition ease-in-out"
            >
              Tambah
            </button>
          </div>
        </div>

        {/* Tabel daftar layanan */}
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Layanan</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {services.map((service) => (
              <tr
                key={service.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  {editingService === service.id ? (
                    <input
                      type="text"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      className="p-2 border rounded-lg w-full"
                    />
                  ) : (
                    service.name
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  {editingService === service.id ? (
                    <button
                      onClick={handleUpdateService}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out"
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          handleEditService(service.id, service.name)
                        }
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition ease-in-out mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ease-in-out"
                      >
                        Hapus
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminManageServices;
