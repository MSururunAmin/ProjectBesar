import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const EmailPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "", // Menambahkan state untuk tanggal
    category: "",
    codeOffice: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); // Gunakan useRouter untuk navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (
      !formData.name ||
      !formData.date ||
      !formData.category ||
      !formData.codeOffice ||
      !formData.description
    ) {
      setError("Semua field harus diisi.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/submit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Detail kesalahan:", errorData);
        throw new Error(errorData.message || "Gagal mengirim permohonan.");
      }

      const result = await response.json();
      console.log("Permohonan berhasil dikirim:", result);

      // Redirect ke halaman lain setelah sukses
      router.push("/halaman-sukses"); // Ganti '/halaman-sukses' dengan path halaman yang diinginkan

      setFormData({
        name: "",
        date: "",
        category: "",
        codeOffice: "",
        description: "",
      });
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      setError(
        "Terjadi kesalahan saat mengirim permohonan. Silakan coba lagi."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-900">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
          FORMULIR
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Input fields */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Asal intansi"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
            />
          </div>

          {/* Tanggal */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="date">
              Tanggal:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
            />
          </div>

          {/* Code Office */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="codeOffice">
              Code Office:
            </label>
            <input
              type="text"
              id="codeOffice"
              name="codeOffice"
              value={formData.codeOffice}
              onChange={handleChange}
              required
              placeholder="Code Office"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
            />
          </div>

          {/* Keterangan */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="description">
              Keterangan:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Keterangan"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
            ></textarea>
          </div>

          {/* Tombol Kirim */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-purple-600 text-white font-bold py-2 rounded hover:bg-purple-700 transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Mengirim..." : "Kirim Permohonan"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailPage;
