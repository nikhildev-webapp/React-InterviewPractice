import React, { useState } from 'react'

const Theme = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme)
    }
    
    const themeStyle = {
        backgroundColor: isDarkTheme ? '#1e1e1e' : '#fff',
        color: isDarkTheme ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        transition:'all 0.3s ease'
        
    }

    const buttonStyle = {
        
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: isDarkTheme ? '#fff' : '#1e1e1e',
        color: isDarkTheme ? '#000' : '#fff',
        border: 'none',
        borderRadius: '5px',
        marginBottom:'20px'
    }
  return (
      <>
          <div style={themeStyle}>
              <button style={buttonStyle} onClick={toggleTheme}>Switch to {isDarkTheme ? 'light' : 'dark'} Mode</button>
              <header>
                  <h1>Welcome to My Dynamic Website</h1>
              </header>
              <main>
                  <p>
                      This is a simple demonstartion of a theme toggle functionality in React.
                      Clicking the button above dynamincally chanes the state and applies different theme
                  </p>
                  <section style={{ marginTop: '20px', border:'1px  dashed', padding:'10px'}}>
                      <h3>Card Components Examples</h3>
                      <p>This Container changes color along with the rese of the page background</p>
                  </section>
              </main>
            </div>
      </>
  )
}

export default Theme