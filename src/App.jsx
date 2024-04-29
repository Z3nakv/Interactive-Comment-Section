import { useContext } from 'react';
import './App.css'
import Commentary from './components/comments/Comment'
import ModalState, { ModalContext } from './components/context/contextModal'
import ModalDelete from './components/modal/modal';
// import ModalDelete from './components/modal/modal'
// import { GlobalContext } from './components/context/context'

function App() {

  const { showModal } = useContext(ModalContext);

  return (
      <div>
          <Commentary />
        {
          showModal && <ModalDelete />
        }
      </div>
  )
}

export default App
