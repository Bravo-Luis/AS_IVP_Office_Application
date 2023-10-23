import React, { useState } from 'react';
import { Button } from '@mui/material';
import './ImageInput.css';

interface ImageInputProps {
    text: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ text }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [valid, setValid] = useState<boolean | null>(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageSrc(reader.result as string);
                setValid(true);
            };

            reader.readAsDataURL(file);
        } else {
            setValid(false);
        }
    };

    const handleRemoveImage = () => {
        setImageSrc(null);
        setValid(false);
    }

    return (
        <div className='custom-input-background'>
            <div id='image-input'>
                {imageSrc ? (
                    <div style={{position: 'relative'}}>
                        <img src={imageSrc} alt="Chosen" />
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={handleRemoveImage} 
                            style={{position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)'}}
                        >
                            Remove Image
                        </Button>
                    </div>
                ) : (
                    <>
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            id="fileInput"
                            accept=".jpeg, .jpg, .png"
                            required
                            onChange={handleImageChange}
                        />
                        <label htmlFor="fileInput">
                            <Button variant="contained" color="primary" component="span">
                                Upload Image
                            </Button>
                        </label>
                    </>
                )}
            </div>
            <div 
                className='custom-input-label'
                style={{
                    color: 'red',
                    display: valid === null ? 'none' : valid ? 'none' : 'inline',
                    fontSize: 'clamp(6px, 5vw, 15px)'
                }}
            >
                Please Upload A {text}
            </div>
        </div>
    );
}

export default ImageInput;
