import Sidebar from "../components/layout/sidebar/Sidebar.jsx";
import Header from "../components/layout/header/Header.jsx";
import NoteButtons from '../components/layout/note-actions/NoteButtons.jsx';
import NoteList from '../components/layout/note-list/NoteList.jsx';
import SignInForm from "../pages/SignInForm";
import { useEffect, useState } from "react";
import Details from "../components/layout/note-details/Details.jsx";

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className='app-layout'>
      <Sidebar />
      <div className='header-content'>
        <Header />
        <div className='main-section'>
          <div className='note-list'>
            <NoteList
              selectedNoteId={selectedNoteId}
              setSelectedNoteId={setSelectedNoteId}
            />
          </div>
          <div className='note-details'>
            <Details noteId={selectedNoteId} />
          </div>
          <div className='note-actions'>
            {<NoteButtons noteId={selectedNoteId} />}
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
