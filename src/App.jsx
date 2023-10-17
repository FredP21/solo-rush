import { useState } from 'react'
import Cardlist from './components/Cardlist'
import data from "./components/datas/Data"
import './App.css'

function App() {
   return (
    <>
    <Cardlist data={data} />
    </>
  )
}

export default App
