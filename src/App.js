import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme';
import { GlobalStyles } from './Global';

import Card from './components/Card';
import Header from './components/Header';

import projects from './projects/projects.json';
import './App.scss';

function App() {
  const [theme, /*setTheme*/] = useState('dark');

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   }
  //   else {
  //     setTheme('light');
  //   }
  // }

  let projs = [];
  Object.keys(projects.projects).forEach((key) => {
    projs.push(projects.projects[key]);
  });

  function byDate(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  projs.sort(byDate).reverse();

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {/* <Card
        title="hey there"
        date={new Date().toLocaleDateString()}
        desc={JSON.stringify(projects)}
        page="https://lukeathedev.github.io/projects/chess2d/"
      /> */}
        <Header date={projects.lastUpdate}/>
        <div className="cardContainer">
          {projs.map((proj) => <Card key={proj.url} title={proj.title} date={proj.date} desc={proj.desc} url={proj.url} repo={proj.repo} />)}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
