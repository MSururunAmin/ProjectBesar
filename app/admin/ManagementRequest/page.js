"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminManageRequests = () => {
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mengambil data permohonan dari API
    const fetchRequests = async () => {
      try {
        console.log("Mengambil data permohonan..."); // Log saat mulai mengambil data
        const response = await fetch("http://192.168.56.47:8000/api/requests", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        console.log("Status respons:", response.status);
        if (!response.ok) {
          throw new Error("Tanggapan jaringan tidak baik");
        }
        const data = await response.json();

        // Sesuaikan struktur data sesuai dengan yang Anda butuhkan
        const formattedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          service: item.category, // Map kategori ke layanan
          status: item.status,
          description: item.description,
          submittedAt: item.created_at.split("T")[0], // Ambil bagian tanggal
          unique_code: item.unique_code,
          date: item.date,
          codeOffice: item.codeOffice,
        }));

        setRequests(formattedData);
      } catch (err) {
        console.error(err); // Log error untuk debugging
        setError("Gagal mengambil data permohonan.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: newStatus } : request
    );
    setRequests(updatedRequests);

    try {
      const response = await fetch(
        `http://192.168.56.47:8000/api/requests/${id}`,
        {
          // Ganti dengan URL API Laravel Anda
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }), // Kirim status yang baru
        }
      );

      if (!response.ok) {
        throw new Error("Gagal memperbarui status");
      }

      // Tambahkan logika tambahan jika diperlukan
    } catch (error) {
      console.error(error); // Log error untuk debugging
      setError("Gagal memperbarui status permohonan.");
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Kelola Permohonan
          </h1>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Daftar Permohonan
        </h2>

        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nama Pengguna</th>
              <th className="py-3 px-6 text-left">Layanan</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Deskripsi</th>
              <th className="py-3 px-6 text-left">Tanggal Pengajuan</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{request.name}</td>
                <td className="py-3 px-6 text-left">{request.service}</td>
                <td className="py-3 px-6 text-left">{request.status}</td>
                <td className="py-3 px-6 text-left">{request.description}</td>
                <td className="py-3 px-6 text-left">{request.submittedAt}</td>
                <td className="py-3 px-6 text-center">
                  <select
                    value={request.status}
                    onChange={(e) =>
                      handleStatusChange(request.id, e.target.value)
                    }
                    className="px-4 py-2 border rounded-lg"
                  >
                    <option value="Terima">Terima</option>
                    <option value="Proses">Proses</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Tolak">Tolak</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminManageRequests;
