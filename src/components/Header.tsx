'use client';
import React, { useState } from 'react';
import Switch from 'react-switch';

const Header: React.FC<{ onLanguageChange: (isEnglish: boolean) => void }> = ({ onLanguageChange }) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const handleLanguageChange = () => {
    const newLanguage = !isEnglish;
    setIsEnglish(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div className=''>
      <header className="py-4 px-16 flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">Francisco López Villa</h1>
        <div className="flex items-center">
          <Switch 
            onChange={handleLanguageChange} 
            checked={isEnglish} 
            onColor="#0d6efd" 
            offColor="#adb5bd" 
            handleDiameter={20} 
            height={28} 
            width={60}
            uncheckedIcon={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  fontSize: 14,
                  color: 'white',
                  paddingRight: 2,
                }}
              >
                Es
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  fontSize: 14,
                  color: 'white',
                  paddingLeft: 2,
                }}
              >
                En
              </div>
            }
            className="react-switch"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
