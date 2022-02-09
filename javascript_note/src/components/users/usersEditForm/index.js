import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Column, Control, Field, Icon, Input, Label } from "rbx";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersService from "../../../services/users";

export const UsersEditForm = (props) => {
  const [userPayload, setUserPayload] = useState({
    name: props?.user?.name,
    email: props?.user?.email,
  });
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let pwdStatus = 200;
      const user = await UsersService.updateUser(props.user._id, userPayload);

      if (password.length > 0) {
        const pwdUpdate = await UsersService.updatePassword(
          props.user._id,
          password
        );
        pwdStatus = pwdUpdate?.status;
      }

      if (user.status === pwdStatus) {
        toast.success("Usuário atulizado com sucesso!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const deleteUser = await UsersService.delete(props.user._id);
    if (deleteUser.status === 200) {
      toast.success("Usuário deletado com sucesso!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      UsersService.logout();
      setRedirectToHome(true);
    }
  };

  if (redirectToHome === true) return <Redirect to={{ pathname: "/" }} />;

  return (
    <Column.Group centered>
      <form onSubmit={handleSubmit}>
        <Column size={12}>
          <Field>
            <Label className="title" size="small">
              Name:
            </Label>
            <Control>
              <Input
                type="name"
                value={userPayload.name}
                onChange={(e) =>
                  setUserPayload((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                required
                name="name"
              />
            </Control>
          </Field>
          <Field>
            <Label size="small" className="title">
              Email:
            </Label>
            <Control>
              <Input
                type="email"
                value={userPayload.email}
                onChange={(e) =>
                  setUserPayload((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                required
                name="email"
              />
            </Control>
          </Field>
          <Field>
            <Label size="small" className="title">
              Nova senha:
            </Label>
            <Control>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </Control>
          </Field>
          <Button.Group align="centered">
            <Button color="danger" onClick={() => handleDelete()}>
              <span>Excluir</span>
              <Icon size="small">
                <FontAwesomeIcon icon={faTimes} />
              </Icon>
            </Button>
            <Button color="success" type="submit">
              <Icon size="small">
                <FontAwesomeIcon icon={faCheck} />
              </Icon>
              <span>Salvar</span>
            </Button>
          </Button.Group>
        </Column>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Column.Group>
  );
};
