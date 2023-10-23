import './CustomInput.css';
import React, { useState } from 'react';

interface CustomInputProps {
    placeholder?: string;
    pattern?: string;
    text: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, pattern, text}) => {
    const [inputValue, setInputValue] = useState('');
    const [valid, setValid] = useState<boolean | null>(null); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentInputValue = event.target.value;
        setInputValue(currentInputValue); 

        if (pattern) {
            const regex = new RegExp(pattern);
            if (!regex.test(currentInputValue)) {
                setValid(false); 
            } else {
                setValid(true);
            }
        } else {
            if (!currentInputValue){
                setValid(false)
            } else {
                setValid(true)
            }
        }
    };

    return (
        <div className='custom-input-background'>
            <div className='custom-input-label'>
                {text}:
            </div>
            <input 
                value={inputValue}
                className='custom-input' 
                type="text" 
                placeholder={placeholder}
                pattern={pattern}
                onChange={handleInputChange}
                style={{
                    borderColor: valid === null ? 'gray' : valid ? 'green' : 'red',
                    color: valid === null ? 'gray' : valid ? 'green' : 'red'
                }}  
            />
            <div 
                className='custom-input-label'
                style={{
                    color: 'red',
                    display: valid === null ? 'none' : valid ? 'none' : 'inline'
                }}
            >
                Please Enter {pattern ? 'Valid' : ''} {text}
            </div>
        </div>
    );
}

export default CustomInput;
