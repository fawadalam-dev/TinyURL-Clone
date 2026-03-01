import './App.css'
import Header from './components/Header'
import UrlShortener from './components/UrlShortener'


function App() {
  return (
    <div className='bg-[#ffffff] w-full min-h-screen text-[#E5E5E5]'>
      <Header />
      <UrlShortener />
    </div>
  )
}

export default App
