/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Player } from "../../../container/playersList/PlayersList";
import { removePlayer } from "../../../redux/players/actions";

const deletePlayer = (id: string) => fetch(`http://localhost:4000/?id=${id}`, { method: "DELETE" }).then((res) => res.json());

function useDeletePalayer(id: string) {
  return useQuery(["player", id], () => deletePlayer(id), {
    enabled: Boolean(id),
  });
}

// eslint-disable-next-line object-curly-newline
const PlayerCard: React.FC<Player> = ({ id, name, age, imageUrl, description }) => {
  const [playerId, setPlayerId] = useState<string>("");
  const dispatch = useDispatch();

  const { data, isLoading, error } = useDeletePalayer(playerId);

  useEffect(() => {
    if (data) {
      toast.success(`${data.data} ${data.message}`);
      dispatch(removePlayer(data.data));
    }
    if (error) toast.error(data.message);
  }, [error, data]);
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Badge pill bg="info">
            {age}
          </Badge>
          {isLoading ? (
            <h6>Loading</h6>
          ) : (
            <img
              onClick={() => setPlayerId(id)}
              alt="Delete"
              src="/trash.png"
              style={{ width: 25, height: 25 }}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
