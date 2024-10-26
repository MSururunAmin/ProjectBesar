"use client";

import ScheduleManager from "@/app/components/schedule/ScheduleManager";
import { useState } from "react";

export default function SchedulePage() {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      date: "2024-10-15",
      time: "10:00 AM",
      service: "Layanan Pengajuan KTP",
    },
    {
      id: 2,
      date: "2024-10-16",
      time: "11:00 AM",
      service: "Layanan Pengajuan Izin Usaha",
    },
  ]);

  const handleAddSchedule = (newSchedule) => {
    setSchedule([...schedule, { id: schedule.length + 1, ...newSchedule }]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Atur Jadwal Pelayanan</h1>
      <ScheduleManager schedule={schedule} addSchedule={handleAddSchedule} />
    </div>
  );
}
