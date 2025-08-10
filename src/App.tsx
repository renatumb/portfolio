import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import ContactModal from "./ContactModal.tsx";
import SideBar from "./components/SideBar.tsx";
import {useEffect} from "react";
import { initGA } from './analitics.tsx';

function App() {

    const contactModal = 'contactModal'
    const toggleContactModal = () => {
        const modal = document.getElementById(contactModal)
        if (modal) {
            modal.classList.toggle('hidden')
        }
    }

    useEffect(() => {
        initGA();
    }, []);

    return (
        <>
            <Header toggleContactModal={ toggleContactModal } />
            <Main  />
            <Footer toggleContactModal={ toggleContactModal } />
            <SideBar toggleContactModal={ toggleContactModal } />
            <ContactModal modalId={contactModal} toggleContactModal={ toggleContactModal }/>
        </>
    )
}

export default App
