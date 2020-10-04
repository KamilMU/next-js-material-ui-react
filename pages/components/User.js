import React from 'react';
import { Avatar, Button } from '@material-ui/core'
import styles from './User.module.css'

const style = {
  avatar: {
    width: '80px',
    height: '80px'
  },
  button: {
    color: 'white'
  }
};

function User({ user, clickedOnEdit, setClickOnEdit }) {
  return (
    <>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.userInfo__left}>
            <Avatar alt="profile pic" src="/profile.png" style={style.avatar} />
            <div className={styles.userInfo__name}>{user.name}</div>
          </div>
          <div
            className={styles.userInfo__rigth}
            onClick={() => setClickOnEdit(!clickedOnEdit)}>
            <div className={styles.btn}>
              <Button
                style={style.button}>
                {clickedOnEdit ? 'Закрыть' : 'Редактировать'}
              </Button>
            </div>
            <img alt="" src={clickedOnEdit ? '/close.png' : '/edit.png'} width="20px" height="20px" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;