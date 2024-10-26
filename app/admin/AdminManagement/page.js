"use client";
import { useState, useEffect } from "react";

const AdminManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Simulasi pengambilan data pengguna
    const fetchUsers = async () => {
      try {
        // Ganti dengan API yang sesungguhnya
        // const response = await fetch('/api/users');
        // const data = await response.json();

        // Simulasi data pengguna
        const data = [
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Smith", email: "jane@example.com" },
        ];

        setUsers(data);
      } catch (err) {
        console.error("Gagal mengambil data pengguna.");
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;
    const newId = users.length + 1;
    setUsers([
      ...users,
      { id: newId, name: newUser.name, email: newUser.email },
    ]);
    setNewUser({ name: "", email: "" });

    // Simpan ke server menggunakan API
    // await fetch('/api/users', { method: 'POST', body: JSON.stringify(newUser) });
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);

    // Hapus dari server menggunakan API
    // await fetch(`/api/users/${id}`, { method: 'DELETE' });
  };

  const handleEditUser = (id, name, email) => {
    setEditingUser(id);
    setUserName(name);
    setUserEmail(email);
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser
        ? { ...user, name: userName, email: userEmail }
        : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
    setUserName("");
    setUserEmail("");

    // Simpan perubahan ke server menggunakan API
    // await fetch(`/api/users/${editingUser}`, { method: 'PUT', body: JSON.stringify({ name: userName, email: userEmail }) });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="bg-white p-4 shadow-md mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Manajemen Pengguna
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
          Daftar Pengguna
        </h2>

        {/* Form untuk menambahkan pengguna baru */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Tambahkan Pengguna Baru
          </h3>
          <div className="flex">
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="Nama pengguna"
              className="p-2 border rounded-lg w-full"
            />
            <input
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              placeholder="Email pengguna"
              className="p-2 border rounded-lg w-full ml-4"
            />
            <button
              onClick={handleAddUser}
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition ease-in-out"
            >
              Tambah
            </button>
          </div>
        </div>

        {/* Tabel daftar pengguna */}
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="p-2 border rounded-lg w-full"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {editingUser === user.id ? (
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="p-2 border rounded-lg w-full"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  {editingUser === user.id ? (
                    <button
                      onClick={handleUpdateUser}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out"
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          handleEditUser(user.id, user.name, user.email)
                        }
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition ease-in-out mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ease-in-out"
                      >
                        Hapus
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminManageUsers;
