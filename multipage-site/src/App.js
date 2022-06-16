import './App.css';
// BrowserRouter is the thing that's going to wrap its component. It's going to wrap our entire application that includes roots.
// Route is something that we're going to use to make Routes.
// Switch는 한번에 1개의 컴포넌트만 보여준다는 것이다.
// Link를 사용하여 anchor(a) tag를 서버의 요청하지 않는 방식으로 대체할 수 있다. (실제로 a tag로 output된다.)
// NavLink는 네비게이션에 사용되며, 현재 위치를 나타내는 네비에 .active 클래스가 자동으로 적용되어 CSS 사용할 수 있다. (css 파일 참조)
// react-router-dom에서 Redirect 컴포넌트를 기본적으로 제공해준다.
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';

// page components
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          {/* <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a> */}
          {/* 아래의 Route와 같은 이유로 exact를 넣어줘야 한다. */}
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
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
          {/*//? :은 react router에게 값이 바뀌는 "router parameter"라는 것을 알려준다. */}
          {/* 이름은 id가 아닌 다양하게 지여도 상관없지만, :을 사용하여 값이 바뀔 수 있는 부분이라고 명시를 해야한다. */}
          <Route path='/articles/:id'>
            <Article />
          </Route>
          {/*//? *는 모든 주소를 의미한다.  */}
          {/* React router는 위에서 아래로 컴파일이 되기 때문에 상기에 작성한 주소가 없는 경우 최종적으로 아래의 주소가 실행된다. */}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
