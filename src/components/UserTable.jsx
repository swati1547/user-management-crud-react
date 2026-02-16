import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Stack,
  Typography,
} from "@mui/material";
import "./UserTable.scss";

function UserTable({ users, onDelete, onEdit }) {
  if (!users.length) {
    return (
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        No users found. Add your first user..
      </p>
    );
  }

  return (
    <TableContainer className="user-table" component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Typography
                    className="action action__edit"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </Typography>

                  <Typography
                    className="action action__delete"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
