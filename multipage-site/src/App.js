import './App.css';
// BrowserRouter is the thing that's going to wrap its component.
// It's going to wrap our entire application that includes roots.
// Route is something that we're going to use to make Routes.
import { BrowserRouter, Route } from 'react-router-dom';

// page components
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
