import React from 'react';
import EditForm from './EditForm'
import styles from './UserDetails.module.css'

function UserDetails({ user, setUser, clickedOnEdit, setClickOnEdit }) {
  return (
    <>
      {clickedOnEdit === false && <div className={styles.contacts}>
        <div className={styles.contact}>{user.name}</div>
        <div className={styles.contact}>{user.email}</div>
        <div className={styles.contact}>{user.number}</div>
      </div>}
      {clickedOnEdit === true && <EditForm user={user} setUser={setUser} setClickOnEdit={setClickOnEdit} />}
    </>
  );
}

export default UserDetails;