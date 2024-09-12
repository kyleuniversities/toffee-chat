import logo from './logo.svg';
import './App.css';
import SiteLeftBody from './components/SiteLeftBody';
import SiteHeader from './components/SiteHeader';
import SiteRightBody from './components/SiteRightBody';
import SiteMiddleBody from './components/SiteMiddleBody';

function App() {
  return (
    <div class="main">
      <SiteHeader />
      <div class="site-body d-flex mx-2 px-3 my-2">
          <div class="site-left-body d-flex px-2">
              <SiteLeftBody />
          </div>
          <div class="site-middle-body d-flex px-2">
              <SiteMiddleBody />
          </div>
          <div class="site-right-body d-flex px-2">
            <SiteRightBody />
          </div>
      </div>
    </div>
  );
}

export default App;
