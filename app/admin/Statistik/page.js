"use client";
import { useState, useEffect } from "react";
// Import useNavigate from react-router-dom

const AdminStatistics = () => {
  const [statistics, setStatistics] = useState({
    totalRequests: 0,
    completedRequests: 0,
    pendingRequests: 0,
    totalUsers: 0,
    feedbackReceived: 0,
  });

  useEffect(() => {
    // Simulasi pengambilan data statistik (gunakan API aktual di sini)
    const fetchStatistics = async () => {
      // Misalkan ini data yang didapat dari API
      const data = {
        totalRequests: 120,
        completedRequests: 100,
        pendingRequests: 20,
        totalUsers: 500,
        feedbackReceived: 35,
      };
      setStatistics(data);
    };

    fetchStatistics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Statistik Admin
          </h1>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Statistik Layanan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Statistik Permohonan */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Total Permohonan
            </h3>
            <p className="text-3xl text-gray-700 font-bold">
              {statistics.totalRequests}
            </p>
            <p className="text-gray-600">
              Jumlah total permohonan yang diterima.
            </p>
          </div>

          {/* Statistik Permohonan Selesai */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Permohonan Selesai
            </h3>
            <p className="text-3xl text-green-500 font-bold">
              {statistics.completedRequests}
            </p>
            <p className="text-gray-600">
              Jumlah permohonan yang telah ditangani.
            </p>
          </div>

          {/* Statistik Permohonan Tertunda */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Permohonan Tertunda
            </h3>
            <p className="text-3xl text-red-500 font-bold">
              {statistics.pendingRequests}
            </p>
            <p className="text-gray-600">
              Jumlah permohonan yang masih tertunda.
            </p>
          </div>

          {/* Statistik Pengguna */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Total Pengguna
            </h3>
            <p className="text-3xl text-gray-700 font-bold">
              {statistics.totalUsers}
            </p>
            <p className="text-gray-600">Jumlah total pengguna terdaftar.</p>
          </div>

          {/* Statistik Masukan dan Dukungan */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Masukan & Dukungan
            </h3>
            <p className="text-3xl text-gray-700 font-bold">
              {statistics.feedbackReceived}
            </p>
            <p className="text-gray-600">
              Jumlah masukan dan dukungan yang diterima.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminStatistics;
