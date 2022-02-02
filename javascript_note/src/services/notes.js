import api from "./api";

const NotesService = {
  index: () =>
    api.get("/notes", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  create: () =>
    api.post(
      "/notes",
      { title: "Nova nota", body: "Nova nota..." },
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    ),
  delete: (id) =>
    api.delete(`/notes/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  update: (id, params) =>
    api.put(`/notes/${id}`, params, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),

  search: (query) =>
    api.get(`/notes/search?query=${query}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
};

export default NotesService;
