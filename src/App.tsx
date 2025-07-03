
import './App.css'
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
        <div className='overflow-x-scroll'>

        <SpreadsheetTable/>
        </div>
      </div>
    </>
  )
}

export default App
