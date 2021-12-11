import HeaderLogged from "../../../components/headerLogged";
import React, { Fragment, useState } from "react";
import "../../../styles/notes.scss";

import Notes from "../../../components/notes";

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default NotesScreen;
