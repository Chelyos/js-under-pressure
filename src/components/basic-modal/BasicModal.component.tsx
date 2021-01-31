import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
  title?: string;
  bodyText: string;
  buttonText: string;
  isOpen: boolean;
  handleClose: MouseEventHandler<HTMLElement>;
  onClick: MouseEventHandler<HTMLElement>;
};

export const BasicModal: FunctionComponent<Props> = ({
  onClick,
  handleClose,
  title,
  bodyText,
  buttonText,
  isOpen,
}) => {
  return (
    <Modal show={isOpen}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{bodyText}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={onClick}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
