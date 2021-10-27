import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./playerCard/PlayerCard";
import { Player } from "../../container/playersList/PlayersList";
import Header from "./header/Header";

const PlayersList: React.FC = () => {
  const players = useSelector((state: any) => state.players);
  return (
    <div>
      <Header />
      <Container className="mt-3">
        <Row>
          {players.map((p: Player, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col xs={12} sm={12} md={6} lg={4} key={index}>
              <Card
                id={p.id}
                name={p.name}
                imageUrl={p.imageUrl}
                description={p.description}
                age={p.age}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlayersList;
