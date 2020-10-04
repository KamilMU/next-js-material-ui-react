import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { useLocalStorage } from './hook/useLocalStorage'
import Header from './components/Header'
import User from './components/User'
import UserDetails from './components/UserDetails'
import RoomHeader from './components/RoomHeader'

export default function Home() {
  const [clickedOnEdit, setClickOnEdit] = useState(false)
  const [user, setUser] = useLocalStorage('user', {
    name: 'Иванова Анна Михайловна',
    email: null,
    number: null
  })

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'API-Key': 'secret',
        'x-token-access': 'random'
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => console.log('Успех: ', data ))
  }, [user])

  return (
    <div className={styles.container}>
      <Header
        user={user}
      />
      <RoomHeader />
      <User
        user={user}
        clickedOnEdit={clickedOnEdit}
        setClickOnEdit={setClickOnEdit}
      />
      <UserDetails
        user={user}
        setUser={setUser}
        clickedOnEdit={clickedOnEdit}
        setClickOnEdit={setClickOnEdit}
      />
    </div>
  )
}
