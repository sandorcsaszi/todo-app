import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TodoList from "./assets/TodoList";
import AddTodoModal from "./assets/AddTodoModal";
import EditTodoModal from "./assets/EditTodoModal";
import { Todo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#4285F4",
      },
      secondary: {
        main: "#34A853",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setIsEditModalOpen(false);
    setEditingTodo(null);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setIsEditModalOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Todo App</h1>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="default"
              />
            }
            label={darkMode ? "Dark Mode" : "Light Mode"}
          />
        </Box>
        <TodoList
          todos={todos}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setIsAddModalOpen(true)}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>
        <AddTodoModal
          open={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddTodo={handleAddTodo}
        />
        {editingTodo && (
          <EditTodoModal
            open={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            todo={editingTodo}
            onUpdateTodo={handleUpdateTodo}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
