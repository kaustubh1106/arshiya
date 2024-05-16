import React from 'react'
import About from './Aboutus/About'
import Msgdirector from "./Aboutus/Msg-from-dir"
import Quality from './Aboutus/Quality'
import Managementteam from './Aboutus/Managementteam'

const Aboutus_compiled = () => {
  return (
    <div>
      <About />
      <Quality />
      <Msgdirector/>
      <Managementteam/>
    </div>
  )
}

export default Aboutus_compiled
