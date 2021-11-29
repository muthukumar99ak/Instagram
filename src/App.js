import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header/header';
import MainFeed from './Components/Feed/MainFeed'

function App() {
  return (
    <Fragment>
        <div className='d-flex allContainer'>
            <div className='mainContent'>
                <MainFeed />
            </div>
            <div>

            </div>
        </div>        
        <Header/>
    </Fragment>
  );
}

export default App;
