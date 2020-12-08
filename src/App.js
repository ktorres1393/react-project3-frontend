import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'


function App() {
  return (
    <div className="App">
     
      <Header />
      <Dashboard />
      <HomePage />
      <LoginPage />
      <SignupPage />
      <Footer />
        
    </div>
  );
}

export default App;
