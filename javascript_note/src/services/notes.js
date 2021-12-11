import api from "./api";

const NotesService = {
  index: () =>
    api.get("/notes", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
};

export default NotesService;
