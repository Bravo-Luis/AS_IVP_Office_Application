import './App.css'

import Paper from '@mui/material/Paper';
import CreatePage from './CreatePage/CreatePage';


function App() {

  return (
    <>
      <Paper elevation={0} sx={{width: '100vw', height: '100vh', position:'absolute' ,zIndex: '-1'}}></Paper>
      <CreatePage/>
    </>
  )
}

export default App