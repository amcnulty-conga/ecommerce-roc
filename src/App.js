import 'conga-component-library';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './shared/Header/Header';
import ActionBar from './shared/ActionBar/ActionBar';
import VerticalNav from './shared/VerticalNav/VerticalNav';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className='App LightTheme'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/*' element={
            <>
              <ActionBar/>
              <div className='bodyContent d-flex'>
                <ErrorBoundary>
                  <VerticalNav/>
                </ErrorBoundary>
                <Main/>
              </div>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
