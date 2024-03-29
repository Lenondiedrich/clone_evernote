import api from "./api";

const UsersService = {
  register: (params) => api.post("/users/register", params),
  login: async (params) => {
    const response = await api.post("/users/login", params);
    localStorage.setItem("user", JSON.stringify(response?.data?.user));
    localStorage.setItem("token", response?.data?.token);
  },
  logout: () => {
    localStorage.removeItem("user", null);
    localStorage.removeItem("token", null);
  },
  delete: (id) => api.delete(`/users/${id}`),
  updateUser: (id, params) => api.put(`/users/${id}`, params),
  updatePassword: (id, params) => api.put(`/users/password/${id}`, params),
};

export default UsersService;
