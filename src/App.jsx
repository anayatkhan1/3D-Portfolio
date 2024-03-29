import { BrowserRouter as Router } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <Router>
        <div className="relative z-0 bg-primary">
            <div className="bg-cover bg-hero-pattern">
                <Navbar />
                <Hero />
            </div>
            <About />
{/*             <Experience />  */}
            <Tech />
            <Works />
{/*             <Feedbacks /> */}
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </div>

    </Router> 
  )
}

export default App
