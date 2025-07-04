
import './App.css'
import Footer from './components/Footer/Footer'
import HeaderBottom from './components/Headers/HeaderBottom'
import HeaderTop from './components/Headers/HeaderTop'


import SpreadsheetTable from './components/SpreadSheet/SpreadSheetTable'

function App() {


  return (
    <>
      <div className='relative'>
        <div className='top-0 z-10 sticky '>

        <HeaderTop/>
        <HeaderBottom/>
        </div>
        <div className='border-2 mb-8 overflow-x-scroll'>

        <SpreadsheetTable/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
