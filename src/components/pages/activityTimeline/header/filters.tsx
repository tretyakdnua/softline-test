import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { AiTwotoneCalendar } from "react-icons/ai";
import {
  DatePicker,
  DateType,
} from "../../../../components/ui/datepicker/datepicker";
import styles from "./filters.module.scss";

export const Filters = (): JSX.Element => {
  const [startDate, setStartDate] = useState<DateType>(new Date());

  return (
    <div className={styles.filters}>
      <Container>
        <Row>
          <div className={styles.wrap}>
            <FiFilter className={styles.icon} />
            <div className={styles.date}>
              <div className={styles.inputdate}>
                <div className={styles.dateicon}>
                  <AiTwotoneCalendar />
                </div>
                <DatePicker date={startDate} dateSetter={setStartDate} />
              </div>
              <InputGroup>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="За весь период"
                />
              </InputGroup>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
