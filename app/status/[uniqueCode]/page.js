"use client"; // This component uses client-side features

import Link from "next/link"; // Import Link dari next/link
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// Komponen StatusPage
const StatusPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil kode unik dari query parameter
  const uniqueCode = searchParams.get("uniqueCode");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Redirect back if no uniqueCode is provided
    if (!uniqueCode) {
      setError("Kode unik tidak ditemukan. Silakan coba lagi.");
      setTimeout(() => {
        router.push("/status"); // Redirect ke halaman status jika tidak ada uniqueCode
      }, 3000); // Redirect setelah 3 detik
    }
  }, [uniqueCode, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
          Status Permohonan
        </h1>

        {error ? (
          // Jika terjadi error (misalnya tidak ada uniqueCode)
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            <p className="text-gray-700 mb-4 text-center">
              Permohonan Anda berhasil dikirim!
            </p>
            {uniqueCode && (
              <div className="text-lg text-green-600 font-bold text-center">
                Kode Unik Anda: {uniqueCode}
              </div>
            )}
            <p className="text-gray-700 mt-6 text-center">
              Gunakan kode unik di atas untuk mengecek status permohonan Anda.
              <Link href={`/components/FormStatus?uniqueCode=${uniqueCode}`}>
                <span className="text-blue-500 hover:underline">
                  Klik disini
                </span>
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

// Pembungkus dengan Suspense
const StatusPageWrapper = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <StatusPage {...props} />
  </Suspense>
);

export default StatusPageWrapper;
