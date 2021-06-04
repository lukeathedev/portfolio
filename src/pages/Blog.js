import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/Themes";

import Header from "../components/Header";
import Footer from "../components/Footer";

import './Blog.scss';

function Blog() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    console.log('ayy')
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  return (
    <div className="Blog">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />

        <Header
          title="Lucas' Blog"
          date={new Date()}
          themeHandler={handleThemeChange}
          theme={theme === 'light' ? "Dark" : "Light"}
        />

        <div>aaaa scary</div>

        <div>
          <hr className="footHr"></hr>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Blog;