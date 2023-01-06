import {FaSearch} from 'react-icons/fa';
import {FormStyle} from "./Styles";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = event => {
        event.preventDefault()
        navigate(`/searched/${input}`)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
            </div>
        </FormStyle>
    );
};

export default Search;