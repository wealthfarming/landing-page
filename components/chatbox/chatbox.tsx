'use client';
import React, { useState } from 'react';

const Chatbox = () => {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    return (
        <>
            <div
                id="chat-toggle-btn"
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgb(233, 180, 96)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClick={toggleChatbox}
                aria-label="Toggle chatbox"
            >
                <span style={{ fontSize: '24px', color: 'white' }}>💬</span>
            </div>
            <iframe
                id="chat-iframe"
                src="https://flutter-interflow-wf.vercel.app/"
                width="400"
                height="600"
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '24px',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    display: isChatboxOpen ? 'block' : 'none',
                }}
                allow="microphone; clipboard-write"
                loading="lazy"
            ></iframe>
        </>
    );
};

export default Chatbox;