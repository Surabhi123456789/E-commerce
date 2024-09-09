import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    {/* // outlet page will display all the pages which we were created inside the routes folder  */}
      <ToastContainer />
      <Header/>
      {/* below css is used to set footer perfectly */}
      <main className=' min-h-[calc(100vh-130px)]'>
          <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;