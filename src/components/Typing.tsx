import { useState, useEffect } from 'react';

interface TypingEffectProps {
  sentence: string;
  speed: number;
  resetDelay: number;
}

const TypingEffect = ({ sentence, speed, resetDelay }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + sentence[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);
    if (index === sentence.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, resetDelay);
    }
    return () => clearInterval(typingInterval);
  }, [index, sentence, speed, resetDelay]);

  return (
    <div className='typing-container'>
      <span className='text'>{displayText}</span>
      <span className='cursor'>|</span>
    </div>
  );
};

export default TypingEffect;
