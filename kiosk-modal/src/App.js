import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import SecondModal from './components/SecondModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  return (
    <div className="App">
      <h1>⬇️</h1>
      <button
        className="openModal"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        눌러줘
      </button>
      

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {secondModal && <SecondModal setOpenSecondModal={setSecondModal} />}
     
    </div>
  );
}
export default App;
