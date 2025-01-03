import React from "react";
import { Todo } from "../types";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} divider>
          <ListItemText primary={todo.title} secondary={todo.description} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => onEdit(todo)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
