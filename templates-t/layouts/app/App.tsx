import { Outlet, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <section className="app">
      <header>App Layout</header>
      <main className="main">
        <nav>
          <Link to="">Home</Link>
          <Link to="example">Example</Link>
          <Link to="test">test</Link>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </section>
  );
}

export default App;
