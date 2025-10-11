import './App.css'
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Reviews from "./components/Reviews.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div>
            <Header />
            <Intro />
            <Services />
            <Portfolio />
            <Reviews />
            <Contacts />
            <Footer />
        </div>
    );
}

