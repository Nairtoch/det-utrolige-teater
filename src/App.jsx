import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Partials/Header/Header';
import { AppRouter } from './Components/App/Router/Router';
import { Footer } from './Components/Partials/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <section>
            <AppRouter />
          </section>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
