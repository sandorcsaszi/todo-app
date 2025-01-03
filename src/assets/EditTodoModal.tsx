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

interface EditTodoModalProps {
  open: boolean;
  onClose: () => void;
  todo: Todo;
  onUpdateTodo: (todo: Todo) => void;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  open,
  onClose,
  todo,
  onUpdateTodo,
}) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    if (title.trim()) {
      onUpdateTodo({
        ...todo,
        title: title.trim(),
        description: description.trim(),
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Todo szerkesztése</DialogTitle>
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
        <Button onClick={handleUpdate} color="primary">
          Mentés
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoModal;
