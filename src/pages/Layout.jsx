import Sidebar from "../components/layout/sidebar/Sidebar.jsx";
import Header from "../components/layout/header/Header.jsx";
import NoteButtons from '../components/layout/note-actions/NoteButtons.jsx';
import NoteList from '../components/layout/note-list/NoteList.jsx';
import SignInForm from "../pages/SignInForm";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email) {
      setIsAuthenticated(true); // si hay usuario registrado
    }
  }, []);
  
  return (
    <div className='app-layout'>
      <Sidebar />
      <div className='header-content'>
        <Header />
        <div className='main-section'>
          <div className='note-list'>
            <NoteList />
          </div>
          <div className='note-details'>
          </div>
          <div className='note-actions'>
            <NoteButtons />
          </div>
        </div>
      </div>
         {!isAuthenticated && (
        <div className="sign-in-overlay">
          <SignInForm onSuccess={() => setIsAuthenticated(true)} />
        </div>
      )}
    </div>
  );
}
