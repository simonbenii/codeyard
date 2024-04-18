import React, { useState, useEffect } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import './passwordStrengthMeter.css';

function PasswordStrengthMeter({ password, onShortScoreChange }) {
  const [shortScoreWord, setShortScoreWord] = useState('weak');
  const [passwordScore, setPasswordScore] = useState(0);

  useEffect(() => {
    const updateShortScoreWord = (score) => {
      let newShortScoreWord;
      switch (score) {
        case 1:
          newShortScoreWord = 'weak';
          break;
        case 2:
          newShortScoreWord = 'okay';
          break;
        case 3:
          newShortScoreWord = 'good';
          break;
        case 4:
          newShortScoreWord = 'strong';
          break;
        default:
          newShortScoreWord = 'short';
          break;
      }
      setShortScoreWord(newShortScoreWord);
      onShortScoreChange(newShortScoreWord);
    };

    updateShortScoreWord(passwordScore);
  }, [passwordScore, onShortScoreChange]);

  const onChangeScore = (score) => {
    setPasswordScore(score);
  };

  return (
    <div className="passwordStrengthMeter">
      <div className={`circle 
        ${shortScoreWord === 'strong' ? 'strong' : ''}
        ${shortScoreWord === 'good' ? 'remove' : ''}
        ${shortScoreWord === 'okay' ? 'remove' : ''}
        ${shortScoreWord === 'weak' ? 'remove' : ''}
        `} style={{ right: '0px', top: '35%' }}>
      </div>

      <div className={`circle 
        ${shortScoreWord === 'strong' ? 'good' : ''}
        ${shortScoreWord === 'good' ? 'good' : ''}
        ${shortScoreWord === 'okay' ? 'remove' : ''}
        ${shortScoreWord === 'weak' ? 'remove' : ''}
        `} style={{ right: '0px', top: '50%' }}>
      </div>

      <div className={`circle 
        ${shortScoreWord === 'strong' ? 'okay' : ''}
        ${shortScoreWord === 'good' ? 'okay' : ''}
        ${shortScoreWord === 'okay' ? 'okay' : ''}
        ${shortScoreWord === 'weak' ? 'remove' : ''}
        `} style={{ right: '0px', top: '65%' }}>
      </div>

      <div className={`circle
        ${shortScoreWord === 'strong' ? 'weak' : ''}
        ${shortScoreWord === 'good' ? 'weak' : ''}
        ${shortScoreWord === 'okay' ? 'weak' : ''}
        ${shortScoreWord === 'weak' ? 'weak' : ''}
        `} style={{ right: '0px', top: '80%' }}>
      </div>
      <div style={{ display: 'none' }}>
        <PasswordStrengthBar password={password} onChangeScore={onChangeScore} />
      </div>
    </div>
  );
}

export default PasswordStrengthMeter;