import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import NotesScreen from "./screens/notes/index";
import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/register";
import UsersEditScreen from "./screens/users/edit";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/notes" component={NotesScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/users/edit" component={UsersEditScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
