import { useEffect, useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import "./Home.scss";

import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../services/userApi";

function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const loadUsers = async () => {
    try {
      setTableLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmitUser = async (data) => {
    try {
      setLoading(true);

      if (editingUser) {
        await updateUser(editingUser.id, data);
        alert("User updated!");
        handleCloseModal();
        loadUsers();
        return;
      } else {
        await createUser(data);
        alert("User created!");
        handleCloseModal();
      }

      loadUsers();
    } catch (error) {
      alert("Error saving user");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;

    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      alert("Error deleting user");
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setOpenModal(true);
  };

  const handleOpenCreate = () => {
    setEditingUser(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingUser(null);
  };

  return (
    <div className="home">
      <div className="home__header">
        <h2 className="home__title">User Management</h2>

        <Button
          className="home__create-btn"
          variant="contained"
          onClick={handleOpenCreate}
        >
          + Create User
        </Button>
      </div>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            width: 400,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" mb={2}>
            {editingUser ? "Update User" : "Create User"}
          </Typography>

          <UserForm
            onSubmit={handleSubmitUser}
            defaultValues={editingUser}
            loading={loading}
          />
        </Box>
      </Modal>

      <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default Home;
