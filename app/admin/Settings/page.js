"use client";
import { useState, useEffect } from "react";

const AdminSettings = () => {
  const [adminName, setAdminName] = useState("Admin User");
  const [newAdminName, setNewAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("id");
  const [privacyTrackingEnabled, setPrivacyTrackingEnabled] = useState(true);
  const [isNameCollapsed, setIsNameCollapsed] = useState(true);
  const [isPasswordCollapsed, setIsPasswordCollapsed] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const settingsData = {
        adminName: "Admin User",
        notificationsEnabled: true,
        darkMode: false,
        language: "id",
        privacyTrackingEnabled: true,
      };

      setAdminName(settingsData.adminName);
      setNotificationsEnabled(settingsData.notificationsEnabled);
      setDarkMode(settingsData.darkMode);
      setLanguage(settingsData.language);
      setPrivacyTrackingEnabled(settingsData.privacyTrackingEnabled);
    };

    fetchSettings();
  }, []);

  const handleNameChange = () => {
    if (newAdminName) {
      setAdminName(newAdminName);
      alert("Nama admin berhasil diubah!");
    } else {
      alert("Masukkan nama admin baru!");
    }
  };

  const handlePasswordChange = () => {
    if (password && newPassword) {
      if (password !== newPassword) {
        alert("Kata sandi berhasil diubah!");
        setPassword("");
        setNewPassword("");
      } else {
        alert("Kata sandi baru tidak boleh sama dengan kata sandi lama.");
      }
    } else {
      alert("Masukkan kata sandi lama dan baru.");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <nav
        className={`bg-white ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        } p-4 shadow-md`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Pengaturan Admin</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Kembali ke Dashboard
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Pengaturan Akun</h2>

        {/* Change Admin Name Section */}
        <div
          className={`bg-white ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } shadow-md rounded-lg`}
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => setIsNameCollapsed(!isNameCollapsed)}
          >
            <h3 className="text-lg font-semibold">Ubah Nama Admin</h3>
            <span>{isNameCollapsed ? "+" : "-"}</span>
          </div>
          {!isNameCollapsed && (
            <div className="p-4">
              <p className="mb-2">Nama saat ini: {adminName}</p>
              <input
                type="text"
                value={newAdminName}
                onChange={(e) => setNewAdminName(e.target.value)}
                placeholder="Masukkan nama baru"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
              />
              <button
                onClick={handleNameChange}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Simpan Nama
              </button>
            </div>
          )}
        </div>

        {/* Change Password Section */}
        <div
          className={`bg-white ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } shadow-md rounded-lg`}
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => setIsPasswordCollapsed(!isPasswordCollapsed)}
          >
            <h3 className="text-lg font-semibold">Ubah Kata Sandi</h3>
            <span>{isPasswordCollapsed ? "+" : "-"}</span>
          </div>
          {!isPasswordCollapsed && (
            <div className="p-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Kata sandi lama"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Kata sandi baru"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
              />
              <button
                onClick={handlePasswordChange}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Ubah Kata Sandi
              </button>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div
          className={`bg-white ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } shadow-md rounded-lg p-4`}
        >
          <h3 className="text-lg font-semibold mb-2">Pengaturan Notifikasi</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Aktifkan notifikasi</span>
          </label>
        </div>

        {/* Theme Settings */}
        <div
          className={`bg-white ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } shadow-md rounded-lg p-4`}
        >
          <h3 className="text-lg font-semibold mb-2">Pengaturan Tema</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Aktifkan mode gelap</span>
          </label>
        </div>

        {/* Language Settings */}
        <div
          className={`bg-white ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } shadow-md rounded-lg p-4`}
        >
          <h3 className="text-lg font-semibold mb-2">Pengaturan Bahasa</h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="id">Bahasa Indonesia</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Privacy Settings */}
        <div
          className={`bg-white ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } shadow-md rounded-lg p-4`}
        >
          <h3 className="text-lg font-semibold mb-2">Pengaturan Privasi</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={privacyTrackingEnabled}
              onChange={() =>
                setPrivacyTrackingEnabled(!privacyTrackingEnabled)
              }
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Aktifkan pelacakan privasi</span>
          </label>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
