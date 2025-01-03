import React, { useState } from "react";
import { Todo } from "../types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface AddTodoModalProps {
  open: boolean;
  onClose: () => void;
  onAddTodo: (todo: Todo) => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({
  open,
  onClose,
  onAddTodo,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAddTodo({
        id: uuidv4(),
        title: title.trim(),
        description: description.trim(),
      });
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Új Todo hozzáadása</DialogTitle>
      <DialogContent>
        <TextField
          label="Cím"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Leírás"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Mégse</Button>
        <Button onClick={handleAdd} color="primary">
          Hozzáadás
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoModal;
