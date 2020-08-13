import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Login } from '../pages'

export default () => {
  return (
    <HashRouter>
      <Route path='/' component={Login}></Route>
    </HashRouter>
  )
}