import CustomInput from '../CustomInput/CustomInput';
import ImageInput from '../ImageInput/ImageInput';
import './CreatePage.css'

import { Button, Paper } from '@mui/material';


function CreatePage(){
    return(
        
        <div id='create-page'>
            <Paper className='create-page-background' elevation={5} >
                <ImageInput text='Profile Image'/>
                <CustomInput placeholder='Enter your name...' pattern='' text='Name'/>
                <CustomInput placeholder='Enter your email...' pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$' text='Email'/>
                <CustomInput placeholder='Enter your date of birth...' pattern='^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$' text='Date Of Birth (MM/DD/YYYY)'/>
                <Button 
                    className='create-page-submit-button' 
                    variant="contained" 
                    sx={{
                        marginTop: 'clamp(10px, 5vh, 20px)',
                        fontSize: 'clamp(8px, 5vw, 20px)'
                    }}
                >Create Profile</Button>
            </Paper>
        </div>

    )
}

export default CreatePage