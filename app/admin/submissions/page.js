"use client";
import SubmissionList from "@/app/components/submissions/SubmissionList";
import { useState } from "react";

const submissionsData = [
  {
    id: 1,
    name: "Surat Keterangan",
    status: "Pending",
    description: "Pengajuan surat keterangan domisili.",
  },
  {
    id: 2,
    name: "Dokumen Izin",
    status: "Pending",
    description: "Pengajuan izin pembangunan.",
  },
];

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState(submissionsData || []);

  const handleUpdateStatus = (id, newStatus) => {
    setSubmissions(
      (prevSubmissions) =>
        prevSubmissions.map((submission) =>
          submission.id === id
            ? { ...submission, status: newStatus }
            : submission
        ) || []
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Kelola Pengajuan Layanan</h1>
      {submissions.length > 0 ? (
        <SubmissionList
          submissions={submissions}
          updateStatus={handleUpdateStatus}
        />
      ) : (
        <p>No submissions available.</p>
      )}
    </div>
  );
}
