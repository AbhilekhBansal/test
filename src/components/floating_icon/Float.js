import React, { useState } from 'react';
import { sidebarToggle } from "../../utils";


const Float = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-icon-container">
      <button className="chat-icon" onClick={() => sidebarToggle()}>
        <i className='fa fa-comments'></i>
      </button>
     
    </div>
  );
};

export default Float;
