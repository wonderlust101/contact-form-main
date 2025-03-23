import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "@/feature/contactForm";

const basename = import.meta.env.BASE_URL;

function App() {
    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path='' element={<ContactForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;