import logo from './logo.svg';
import './App.css';
import './LogInForm.css'
import LogIn from './pages/LogIn';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import LogInForm from './components/LogIn/LogInForm';
import MovieList from './components/Home/MovieList';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route path="/" element={<LogInForm />} />
                <Route path="/home" element={<Home/>}/>
                <Route path='/movieList' element={<MovieList/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
