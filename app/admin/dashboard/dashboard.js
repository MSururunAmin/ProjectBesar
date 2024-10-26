import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const router = useRouter();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    // Simulasi autentikasi admin
    const isAdminLoggedIn = true; // Flag dummy, ganti dengan logika autentikasi asli
    if (!isAdminLoggedIn) {
      router.push("/admin/login");
    } else {
      setAdminName("Admin User"); // Nama admin bisa didapat dari data API
    }
  }, []);

  const handleLogout = () => {
    // Logika logout admin
    alert("Logging out...");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition ease-in-out"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Selamat Datang, {adminName}
        </h2>
        <p className="text-gray-600 mb-6">
          Ini adalah halaman Admin Dashboard. Dari sini, Anda bisa mengelola
          sistem pelayanan, pengguna, permohonan, dan pengaturan lainnya.
        </p>

        {/* Example sections - Replace with actual dashboard content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Users */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Kelola Pengguna
            </h3>
            <p className="text-gray-600">
              Lihat dan kelola pengguna yang terdaftar.
            </p>
            <button
              onClick={() => router.push("/admin/AdminManagement")}
              className="mt-4 text-blue-500 underline"
            >
              Kelola Pengguna
            </button>
          </div>

          {/* Manage Requests */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Kelola Permohonan
            </h3>
            <p className="text-gray-600">
              Pantau dan atur status permohonan yang diajukan.
            </p>
            <button
              onClick={() => router.push("/admin/ManagementRequest")}
              className="mt-4 text-blue-500 underline"
            >
              Lihat Permohonan
            </button>
          </div>

          {/* Service Management */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manajemen Layanan
            </h3>
            <p className="text-gray-600">
              Tambah, edit, atau hapus layanan yang tersedia.
            </p>
            <button
              onClick={() => router.push("/admin/ManagementLayanan")}
              className="mt-4 text-blue-500 underline"
            >
              Kelola Layanan
            </button>
          </div>

          {/* Statistics */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Statistik
            </h3>
            <p className="text-gray-600">
              Lihat statistik dan laporan layanan.
            </p>
            <button
              onClick={() => router.push("/admin/Statistik")}
              className="mt-4 text-blue-500 underline"
            >
              Lihat Statistik
            </button>
          </div>

          {/* Settings */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pengaturan
            </h3>
            <p className="text-gray-600">
              Atur preferensi admin dan konfigurasi sistem.
            </p>
            <button
              onClick={() => router.push("/admin/Settings")}
              className="mt-4 text-blue-500 underline"
            >
              Buka Pengaturan
            </button>
          </div>

          {/* Feedback and Support */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Masukan & Dukungan
            </h3>
            <p className="text-gray-600">
              Kelola masukan dan keluhan dari pengguna.
            </p>
            <button
              onClick={() => router.push("/admin/Masukan&Layanan")}
              className="mt-4 text-blue-500 underline"
            >
              Lihat Feedback
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
