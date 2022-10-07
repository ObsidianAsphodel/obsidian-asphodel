import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useNavigate } from 'react-router-dom';
import About from './Pages/About';

function App() {
  let navigate = useNavigate();
  let component
  switch (window.location){
    case '/':
      component = <App/>
      break;
    case '/about':
      component = <About/>
      break;
    default:
      break;
  }
  return (
      <>
        <Container>
          <h1>Obsidian Asphodel</h1>
          <div>
              <h3>Will you enter?</h3>
              <Button className='btn' onClick={(e) => {
                e.preventDefault();
                console.log('clicked');
                {navigate('/about')};
              }}>Enter</Button>
          </div>
        </Container>
      </>
  );
}

export default App;
