import React, { useContext } from 'react';
import { userContext } from '../../contexts/userContext'

export function Welcome() {

  const { user } = useContext(userContext)

  return (
    <>
      <h1>Seja Bem Vindo, { user }</h1>
    </>
  )
}
