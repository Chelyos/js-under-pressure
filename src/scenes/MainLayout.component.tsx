import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { EditorJs } from '../layouts/editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../layouts/header';
import { Console } from '../layouts/console';
import { createUseStyles } from 'react-jss';
import { Enonce } from '../layouts/enonce';

export const MainLayout = () => {
  const styles = useStyles();
  return (
    <Fragment>
      <Container fluid className={styles.container}>
        <Row noGutters={false}>
          <Col>
            <Header text={'Javascript Under Pressure'} />
          </Col>
        </Row>
        <Row noGutters={false}>
          <Col className={styles.column}>
            <Enonce />
          </Col>
        </Row>
        <Row>
          <Col className={styles.column}>
            <EditorJs />
          </Col>
        </Row>
        <Row noGutters={false}>
          <Col className={styles.console}>
            <Console />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const useStyles = createUseStyles({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100vh',
    maxHeight: '100vh',
  },
  console: {
    backgroundColor: 'transparent',
    margin: '20px',
  },
  column: {
    margin: '20px',
  },
});
