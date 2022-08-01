import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChartBar, FaLaptop } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import styles from "./header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Container>
        <Row>
          <div className={styles.wrap}>
            <div>
              <h1 className={styles.h1}>
                <FaChartBar />
                <span>Лента активностей</span>
              </h1>
              <p className={styles.p}>
                <span>Указана суточная активность пользователей</span>{" "}
                <AiFillInfoCircle />
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.user}>
                <FaLaptop /> | <ImUser />{" "}
                <span className={styles.name}>Сергей Лапотников</span>
              </span>
              <span>
                <span className={styles.dt}>Отдел</span>{" "}
                <span className={styles.dd}>Программисты</span>
              </span>
              <span>
                <span className={styles.dt}>Профиль</span>{" "}
                <span className={styles.dd}>По умолчанию</span>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
