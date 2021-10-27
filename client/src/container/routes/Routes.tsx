import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "../../component/spinner/Spinner";

import { PLAYERS_LIST, ADD_PLAYER } from "../../constants";

const PlayersList = React.lazy(() => import("../playersList/PlayersList"));
const PlayerContainer = React.lazy(() => import("../player/Player"));

const Routes: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path={PLAYERS_LIST} exact>
        <PlayersList />
      </Route>
      <Route path={ADD_PLAYER} exact>
        <PlayerContainer />
      </Route>
    </Switch>
  </Suspense>
);
export default Routes;
