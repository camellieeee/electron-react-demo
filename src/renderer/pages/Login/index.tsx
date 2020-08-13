import React from 'react'
import { autorun } from 'mobx'
import { observer, useLocalStore } from 'mobx-react'
import DemoStore from './store'

export default observer(() => {
  const Store = useLocalStore(() => new DemoStore())
  
  autorun(() => {
    console.log('demoStore-count:', Store.count);
  })
  
  return (
    <div>
      hello world
    </div>
  )
})