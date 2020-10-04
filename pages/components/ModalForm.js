import React from 'react';
import { Button, Box, Modal } from '@material-ui/core'
import styles from './EditForm.module.css'

function ModalForm({ user, setOpen, setUser, setClickOnEdit }) {
  return (
    <>
      <Modal
        open={true}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description">
        <div className={styles.modal}>
          <div>Сохранить изменения?</div>
          <Box
            position="absolute"
            top={0}
            right={0}>
            <Button
              onClick={() => setOpen(false)}
              color="primary"
              className={styles.closeBtn}>
              x
            </Button>
          </Box >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setUser(user);
              setClickOnEdit(false)
            }}>
            Сохранить
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setClickOnEdit(false)
            }}>
            Не сохранять
          </Button>
        </div>
      </Modal>)
    </>
  );
}

export default ModalForm;