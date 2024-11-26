import React from 'react'
import { About } from './components/About'
import { Principals } from './components/Principals'
import { Faculty } from './components/Faculty'
import { BlogsData } from './components/BlogsData'
import { Gallary } from './components/Gallary'

const App = () => {
  return (
    <div>
      <About />
      <Principals />
      <Faculty />
      <BlogsData />
      <Gallary />
    </div>
  )
}

export default App

