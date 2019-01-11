import axios from "axios";

export function addTodo(text) {
  return axios.post("/todos", { text });
}

export function deleteTodo(id) {
  return axios.delete(`/todos/${id}`);
}

export function editTodo(id, text) {
  return axios.post(`/todos/${id}`, { text });
}

export function fetchTodos() {
  return axios.get("/todos");
}

export function completeTodo(id) {
  return axios.post(`/todos/${id}/complete`);
}

export function incompleteTodo(id) {
  return axios.post(`/todos/${id}/incomplete`);
}
