import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "./header/header";
import { Filters } from "./header/filters";
import { List } from "./list/list";

const data = [
  {
    date: "21-Июль-2022",
  },
];

export const ActivityTimelinePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Filters />
      <Container>
        <Row>
          <Col xxl={12} xl={12} sm={12} md={12} lg={12}>
            <List data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
