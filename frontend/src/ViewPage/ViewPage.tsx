import { Paper, Avatar, useTheme, Button } from '@mui/material';
import './ViewPage.css'
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../CustomTextField/CustomTextField';
type CreatePageProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
  };



  const ViewPage: React.FC<CreatePageProps> = ({
    name,
    email,
    date,
    image,
  }) => {

    const theme = useTheme();
    const navigate = useNavigate()

    useEffect(() => {
        if (!name || !email || !date || !image){
            navigate('/create')
        }
      }, []);

    return(
    <div id='view-page'>
        <Paper className='view-page-background' elevation={0}>
            <Avatar
                    alt="Uploaded Preview"
                    src={image}
                    sx={{ width: 225, height: 225 }}
            />
            <br />
            <CustomTextField 
              className='view-text'
              label="Name"
              defaultValue={name}
              inputFontSize={theme.typography.h5.fontSize}
              labelFontSize={theme.typography.h6.fontSize}
              labelShrink={true}
              readOnly={true}
            />
            <br />
            <CustomTextField 
              className='view-text'
              label="Email"
              defaultValue={email}
              inputFontSize={theme.typography.h5.fontSize}
              labelFontSize={theme.typography.h6.fontSize}
              labelShrink={true}
              readOnly={true}
            />
            <br />
            <CustomTextField 
              className='view-text'
              label="Date of Birth"
              defaultValue={date}
              inputFontSize={theme.typography.h5.fontSize}
              labelFontSize={theme.typography.h6.fontSize}
              labelShrink={true}
              readOnly={true}
            />
            <br />
            <Button
            sx={{ 
                fontSize: theme.typography.h5.fontSize,
                justifySelf: 'flex-end'
            }}
              variant="outlined"
              aria-required
              onClick={() => {
                navigate('/create')
              }}
            >
              Edit
            </Button>

            
        </Paper>
    </div>
    )

}

export default ViewPage