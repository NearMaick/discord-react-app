import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth/discord' component={Dashboard} />
    </Switch>
  );
}
