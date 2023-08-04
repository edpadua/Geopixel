
import './App.css'
import Clock from './Components/Clock/index'
import ItemsList from './Components/ItemsList'
import Ball from './Components/Ball'

function App() {


  return (
    <div className='app_containter'>
      <div className='app_column'>
        <Clock />
        <ItemsList />
      </div>
      <div className='app_column'>
        <Ball />
      </div>
    </div>
  )
}

export default App
