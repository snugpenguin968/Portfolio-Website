import React from 'react';
import {About,Footer,Header,Skills,Projects} from './container'
import {Navbar} from './components'
const App = () => {
  return (
    <div className="app" >
      
        
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
      
    </div>
  )
}

export default App