import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayerForm from "../../component/playerForm/playerForm";
import { handleAddPlayer } from "../../redux/players/actions";

export interface PlayerFormInitState {
  name: string;
  age: number;
  imageUrl: string;
  description: string;
}

const PlayerContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const defaultFormState: PlayerFormInitState = {
    name: "Babar",
    age: 25,
    imageUrl:
      "https://images.news18.com/ibnlive/uploads/2021/07/1626193210_e6l-r_qwyayhtqz1.jpg?impolicy=website&width=510&height=356",
    description: "Enter player's discription",
  };

  const onSubmit = (values: PlayerFormInitState, actions: any): void => {
    dispatch(handleAddPlayer(values, actions, history));
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <PlayerForm onSubmit={onSubmit} currentFormState={defaultFormState} />
    </div>
  );
};

export default withRouter(PlayerContainer);
