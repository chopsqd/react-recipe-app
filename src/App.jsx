import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import {GiKnifeFork} from "react-icons/gi";
import {Logo, Nav} from "./components/Styles";

function App() {
    return (
        <BrowserRouter>
            <Nav>
                <GiKnifeFork />
                <Logo to={'/'}>Yummy</Logo>
            </Nav>
            <Search />
            <Category/>
            <Pages/>
        </BrowserRouter>
    );
}

export default App;