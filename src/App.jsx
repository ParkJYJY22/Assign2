import logo from './assets/naver.png'
import Upperbox from './components/Upperbox'
import Lowerbox from './components/Lowerbox'
import './App.css'

function App() {

  return (
    <div className='App'>
      <header className='logo'><img src={logo} width='120px'/></header>
      <Upperbox/>
      <Lowerbox/>
    </div>
  )
}

export default App
