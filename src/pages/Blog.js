import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/Themes";

import Header from "../components/Header";
import Footer from "../components/Footer";

import './Blog.scss';
import BlogPost from "../components/BlogPost";

function Blog() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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

        <div className="blogPostContainer">
          <BlogPost title="Coming soon..." />
          <BlogPost title="Stay tuned" />
        </div>

        <div>
          <hr className="footHr"></hr>
          <Footer />
        </div>
        
      </ThemeProvider>
    </div>
  );
}

export default Blog;