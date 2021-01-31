import React, { FunctionComponent, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { RebootIcon } from '../../asset/icons';
import { staticText } from '../../asset/texts';
import { BasicModal } from '../../components/basic-modal';
import { RoundedButton } from '../../components/rounded-button';
import { resetStart } from '../../store/action';

type Props = {
  text: String;
};

export const Header: FunctionComponent<Props> = ({ text }) => {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleOpenAndClose = () => {
    setShow(!show);
  };

  const onClickModal = () => {
    dispatch(resetStart());
    setShow(!show);
  };
  return (
    <Navbar className={styles.navbar}>
      <Navbar.Brand className={styles.text}>
        <div className={styles.text}>{text}</div>
      </Navbar.Brand>
      <RoundedButton
        onClick={handleOpenAndClose}
        variant={'danger'}
        icon={<RebootIcon height={'32'} width={'32'} />}
      />
      <BasicModal
        isOpen={show}
        bodyText={staticText.resetModalText}
        title={staticText.resetModalTitle}
        buttonText={staticText.resetModalButton}
        onClick={onClickModal}
        handleClose={handleOpenAndClose}
      />
    </Navbar>
  );
};

const useStyles = createUseStyles({
  navbar: {
    //backgroundColor: 'trnasparent',
    justifyContent: 'space-around',
  },
  text: {
    color: 'black',
  },
});
