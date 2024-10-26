"use client";
import { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "Apa itu status permohonan?",
      answer:
        "Status permohonan adalah informasi terkini mengenai kondisi permohonan yang telah Anda kirimkan.",
    },
    {
      question: "Bagaimana cara mengecek status permohonan?",
      answer:
        "Anda dapat mengecek status permohonan melalui halaman cek status dengan memasukkan unique code Anda.",
    },
    {
      question: "Berapa lama proses permohonan?",
      answer:
        "Proses permohonan biasanya memakan waktu antara 3 hingga 5 hari kerja, tergantung pada jenis permohonan.",
    },
    {
      question: "Apa yang harus dilakukan jika permohonan saya ditolak?",
      answer:
        "Jika permohonan Anda ditolak, Anda akan menerima email yang menjelaskan alasan penolakan dan langkah selanjutnya.",
    },
    {
      question: "Apakah saya bisa mengubah permohonan setelah dikirim?",
      answer:
        "Setelah permohonan dikirim, Anda tidak dapat mengubahnya. Namun, Anda dapat mengajukan permohonan baru.",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Frequently Asked Questions (FAQ)
        </h1>
        {faqs.map((faq, index) => {
          const [isOpen, setIsOpen] = useState(false); // State untuk setiap FAQ

          return (
            <div key={index} className="mb-4">
              <h2
                className="text-lg font-semibold text-purple-800 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {faq.question}
              </h2>
              {isOpen && <p className="text-gray-700 mt-2">{faq.answer}</p>}
            </div>
          );
        })}
        <div className="text-center mt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
