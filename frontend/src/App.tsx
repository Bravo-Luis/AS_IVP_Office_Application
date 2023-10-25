import './App.css';

import Paper from '@mui/material/Paper';
import CreatePage from './CreatePage/CreatePage';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ViewPage from './ViewPage/ViewPage';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate()
  useEffect(() => {
    if (!name || !email || !date || !image){
        navigate('/create')
    }
  }, []);

  let theme = createTheme({
    palette: {
      primary: {
        main: '#6F2DBD',
      }
    }
  });

theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} sx={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: '-1' }}></Paper>
      <Routes>
        <Route path='/AS_IVP_Office_Application/create' element={<CreatePage name={name} setName={setName} email={email} setEmail={setEmail} date={date} setDate={setDate} image={image} setImage={setImage}/>}/>
        <Route path='/AS_IVP_Office_Application/view' element={<ViewPage name={name} setName={setName} email={email} setEmail={setEmail} date={date} setDate={setDate} image={image} setImage={setImage}/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App;
