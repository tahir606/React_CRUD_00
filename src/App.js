import './App.css';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br></br>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <RegistrationForm></RegistrationForm>
      </div>      
    </div>
  );
}

export default App;
