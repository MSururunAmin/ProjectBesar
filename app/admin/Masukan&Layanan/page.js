"use client";
import { useState, useEffect } from "react";

const AdminFeedbackSupport = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  useEffect(() => {
    // Simulasi pengambilan data masukan dan dukungan
    const fetchFeedbacks = async () => {
      try {
        // Ganti dengan API atau fungsi yang sesungguhnya
        // const response = await fetch('/api/feedback');
        // const data = await response.json();

        // Simulasi data masukan & dukungan
        const data = [
          {
            id: 1,
            name: "John Doe",
            message: "Layanan sangat baik.",
            status: "pending",
          },
          {
            id: 2,
            name: "Jane Smith",
            message: "Perbaiki fitur X, ada bug.",
            status: "pending",
          },
          {
            id: 3,
            name: "Chris Johnson",
            message: "Saran: Tambahkan fitur Y.",
            status: "completed",
          },
        ];

        setFeedbacks(data);
      } catch (err) {
        console.error("Gagal mengambil data masukan.");
      }
    };

    fetchFeedbacks();
  }, []);

  const handleMarkAsCompleted = (id) => {
    const updatedFeedbacks = feedbacks.map((feedback) =>
      feedback.id === id ? { ...feedback, status: "completed" } : feedback
    );
    setFeedbacks(updatedFeedbacks);

    // Simpan perubahan status ke server menggunakan API
    // await fetch(`/api/feedback/${id}`, { method: 'PUT', body: JSON.stringify({ status: 'completed' }) });
  };

  const handleDeleteFeedback = (id) => {
    const updatedFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(updatedFeedbacks);

    // Hapus masukan dari server menggunakan API
    // await fetch(`/api/feedback/${id}`, { method: 'DELETE' });
  };

  const handleViewFeedback = (feedback) => {
    setSelectedFeedback(feedback);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="bg-white p-4 shadow-md mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Masukan & Dukungan
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
          Daftar Masukan & Dukungan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className={`p-6 bg-white rounded-lg shadow-md ${
                feedback.status === "completed" ? "opacity-60" : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feedback.name}
              </h3>
              <p className="text-gray-600 mb-4">{feedback.message}</p>
              <p className="text-gray-500 italic mb-4">
                Status: {feedback.status}
              </p>
              <div className="flex justify-between">
                {feedback.status === "pending" && (
                  <button
                    onClick={() => handleMarkAsCompleted(feedback.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition ease-in-out"
                  >
                    Tandai Selesai
                  </button>
                )}
                <button
                  onClick={() => handleDeleteFeedback(feedback.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ease-in-out"
                >
                  Hapus
                </button>
                <button
                  onClick={() => handleViewFeedback(feedback)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out"
                >
                  Lihat
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedFeedback && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Detail Masukan
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Nama:</strong> {selectedFeedback.name}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Pesan:</strong> {selectedFeedback.message}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Status:</strong> {selectedFeedback.status}
            </p>
            <button
              onClick={() => setSelectedFeedback(null)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition ease-in-out"
            >
              Tutup Detail
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminFeedbackSupport;
