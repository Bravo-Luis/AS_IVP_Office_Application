import './App.css';

import Paper from '@mui/material/Paper';
import CreatePage from './CreatePage/CreatePage';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  let theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#f44336',
      },
      background: {
        default: '#fff',
      },
    }
  });


theme = responsiveFontSizes(theme);



  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} sx={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: '-1' }}></Paper>
      <CreatePage name={name} setName={setName} email={email} setEmail={setEmail} date={date} setDate={setDate} image={image} setImage={setImage}/>
    </ThemeProvider>
  )
}

export default App;
