import './App.css';
// BrowserRouter is the thing that's going to wrap its component. It's going to wrap our entire application that includes roots.
// Route is something that we're going to use to make Routes.
// Switch는 한번에 1개의 컴포넌트만 보여준다는 것이다.
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

        {/* 특정한 route에 접근할 때, React router는 Top에서 Bottom으로 매치된다. */}
        {/* '/about'를 입력하면 '/'가 먼저 매치되고, Switch로 묶여 있어 뒤에 있는 About 컴포넌트가 나오지 않는다. */}
        {/* 이를 방지하기 위해 exact prop을 넣어야한다. 이는 정확하게 입력한 경우에만 나온다는 뜻이다. */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
