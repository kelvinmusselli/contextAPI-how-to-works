import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userContext } from '../../contexts/userContext'


export function Home() {
  const history = useHistory()
  const [addUser, setAddUser] = useState('')
  const { setUser } = useContext(userContext)

  const handleAddUser = () => {
    setUser(addUser)
    history.push('/welcome')
  }

  return (
    <div>
      <label>Digite o nome para entrar:</label>
      <input type="text" value={addUser} onChange={(e) => setAddUser(e.target.value)}/>
      <button onClick={handleAddUser}>Entrar</button>
    </div>
  );
}
