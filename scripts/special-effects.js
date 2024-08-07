const typingEffect = (elementId, textArray, typingSpeed = 100, deletingSpeed = 50, pauseTime = 3000) => {
    const element = document.getElementById(elementId);
    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let currentText = '';
    
    const type = () => {
      if (isTyping) {
        if (charIndex < textArray[textIndex].length) {
          currentText += textArray[textIndex][charIndex];
          element.textContent = currentText;
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          isTyping = false;
          setTimeout(deleteText, pauseTime);
        }
      }
    };
    
    const deleteText = () => {
      if (!isTyping) {
        if (charIndex > 0) {
          currentText = currentText.slice(0, -1);
          element.textContent = currentText;
          charIndex--;
          setTimeout(deleteText, deletingSpeed);
        } else {
          isTyping = true;
          textIndex = (textIndex + 1) % textArray.length;
          setTimeout(type, typingSpeed);
        }
      }
    };
    
    type();
  };
  
  // Usage
  const texts = ["I'm Palesa","Junior Web Developer", "Click the button to get to know me!", "Enjoy your stay!"];
  typingEffect('typing-effect', texts);

  