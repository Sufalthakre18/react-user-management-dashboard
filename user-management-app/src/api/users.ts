import axios from "axios";
import type { User, UserFormData } from "../types/user";

const API = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get<User[]>(API);
  return response.data;
};

// Fetch single user
export const fetchUserById = async (id: number) => {
  const response = await axios.get<User>(`${API}/${id}`);
  return response.data;
};

// Create user
export const createUser = async (data: UserFormData) => {
  const response = await axios.post<User>(API, data);
  return response.data;
};

// Update user
export const updateUser = async (
  id: number,
  data: UserFormData
) => {
  const response = await axios.put<User>(
    `${API}/${id}`,
    data
  );

  return response.data;
};

// Delete user
export const deleteUser = async (id: number) => {
  await axios.delete(`${API}/${id}`);
};