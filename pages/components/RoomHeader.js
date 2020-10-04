import React from 'react';
import styles from './RoomHeader.module.css'

function RoomHeader(props) {
  return (
    <>
      <div className={styles.room}>
        <div className={styles.room__name}>Личный профиль</div>
        <div className={styles.room__routes}>Главная/Личный профиль</div>
      </div>
    </>
  );
}

export default RoomHeader;