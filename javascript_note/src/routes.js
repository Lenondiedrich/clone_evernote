import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import NotesScreen from "./screens/notes/index";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import UsersEditScreen from "./screens/users/edit";

import PrivateRouter from "./components/auth/privateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <PrivateRouter exact path="/notes" component={NotesScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <PrivateRouter exact path="/users/edit" component={UsersEditScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
