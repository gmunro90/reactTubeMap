import './App.css'
import Header from './components/Header'


function App() {
      
  return (
    <div className='App'>
      <Header />
      <h4 className='header-text'>a single page app displaying a card built in Domo</h4>
      <div className='covid'>
      <iframe title="domo "src="https://websy-io.domo.com/embed/card/1366365913?enable=title,summary,drill,filter,picker" width="600" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
      </div>
    </div>
  )
}

export default App
