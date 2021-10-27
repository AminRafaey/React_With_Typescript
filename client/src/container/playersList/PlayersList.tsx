import React from "react";
import { withRouter } from "react-router-dom";
import Players from "../../component/playerList/PlayerList";

export interface Player {
  id: string;
  name: string;
  age: number;
  imageUrl: string;
  description: string;
}

const PlayersList: React.FC = () => <Players />;

export default withRouter(PlayersList);
