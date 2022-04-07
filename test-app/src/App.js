import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, Router } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (

    <div className='App'>
      
          <Link to="/signup">회원가입</Link>

      <Routes>
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <SignUp></SignUp> */}
      <h2>제가,,보이시나요....</h2>
 

</div>
  );
}

export default App;
