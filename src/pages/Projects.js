import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { lightTheme, darkTheme } from '../styles/Themes';

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

import projects from './Projects.json';
import './Projects.scss';

function App() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  let projs = [];
  Object.keys(projects.projects).forEach((key) => {
    projs.push(projects.projects[key]);
  });

  function byDate(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  projs.sort(byDate).reverse();

  return (
    <div className="Projects">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {/* <Card
        title="hey there"
        date={new Date().toLocaleDateString()}
        desc={JSON.stringify(projects)}
        page="https://lukeathedev.github.io/projects/chess2d/"
      /> */}
        <div>
          <Header title="Lucas' Portfolio"
            date={projects.lastUpdate}
            themeHandler={handleThemeChange}
            theme={theme === 'light' ? "Dark" : "Light"}
          />

          <div className="cardContainer">
            {projs.map((proj) => <Card
              key={proj.title}
              title={proj.title}
              date={proj.date}
              desc={proj.desc}
              image={proj.image}
              url={proj.url}
              repo={proj.repo}
            />)}
          </div>
        </div>
        <div>
          <hr className="footHr"></hr>

          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
