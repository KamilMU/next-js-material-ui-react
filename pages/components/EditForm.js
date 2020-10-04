import React, { useState } from 'react';
import { FormGroup, Input, InputLabel, TextField, Button, Box, Modal, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from './EditForm.module.css'
import ModalForm from './ModalForm';

const useStyles = makeStyles({
  root: {
    borderRight: '1px solid grey'
  },
});

function EditForm({ user, setClickOnEdit, setUser }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [confirm, setConfirm] = useState('')
  const [open, setOpen] = useState('')
  const [isNameError, setNameError] = useState(false)
  const [isEmailError, setEmailError] = useState(false)
  const [isPhoneError, setPhoneError] = useState(false)
  const classes = useStyles();
  console.log(user.name)
  function validatePhoneNumber(value) {
    let error = '';

    if (!value) return error = 'Введите номер телефона';
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
      error = 'Вы неверно указали формат номера телефона';
    }

    return error
  }

  function validateEmail(value) {
    let error = '';

    if (!value) return error = 'Введите почту';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }

    return error
  }

  function validateUsername(value) {
    let error = '';

    if (!value) return error = 'Введите имя и фамилию';
    if (value === !user.name) {
      error = 'Вы неверно указали имя';
    }
    // if (value === !user.surname) {
    //   error = 'Вы неверно указали фамилию';
    // }
    // if (value === !user.name && value === !user.surname) {
    //   error = 'Вы неверно указали имя и фамилию';
    // }

    return error;
  }

  function saveUserChanges() {
    if ((validateUsername(name) === '') && (
      validateEmail(email) === '') && (
        validatePhoneNumber(number) === '')) {
      setConfirm(true);
      setOpen(true);
    }
  }

  return (
    <div className={styles.form}>
      <form method="post" onSubmit={e => {
        e.preventDefault();
        saveUserChanges()
      }}>
        <FormGroup row>
          <Grid
            spacing={2}
            container>
            <Grid
              container
              item xs={12}
              sm={4} md={4}
              className={classes.root}>
              <TextField
                label="Имя и Фамилия"
                type="text"
                value={name}
                autoComplete="current-password"
                variant="outlined"
                error={validateUsername(name) !== ''}
                helperText={validateUsername(name)}
                onChange={(e) => {
                  validateUsername(name);
                  setName(e.target.value)
                }}
              />
            </Grid>
            <Grid
              container
              item xs={12}
              sm={4} md={4}
              className={classes.root}>
              <TextField
                label="Почта"
                type="email"
                autoComplete="current-password"
                variant="outlined"
                value={email}
                error={validateEmail(email) !== ''}
                helperText={validateEmail(email)}
                onChange={e => {
                  validateEmail(email);
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid
              container
              item xs={12}
              sm={4} md={4}
              xl={4}>
              <TextField
                label="Номер телефона"
                type="number"
                value={number}
                autoComplete="current-password"
                variant="outlined"
                error={validatePhoneNumber(number) !== ''}
                helperText={validatePhoneNumber(number)}
                onChange={(e) => {
                  validatePhoneNumber(number);
                  setNumber(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </FormGroup>
        <Box mt={5}>
          <Button type="submit" variant="contained" color="primary" onClick={() => saveUserChanges()}>
            Сохранить изменения
        </Button>
        </Box>
      </form>
      {confirm && ((name !== '') && (
        email !== '') && (number !== '')) && (
          open && (
            <ModalForm
              user={{ name, email, number }}
              setOpen={setOpen}
              setUser={setUser}
              setClickOnEdit={setClickOnEdit}
            />)
        )}
    </div>
  );
}

export default EditForm;