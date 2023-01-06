import {FaHamburger, FaPizzaSlice} from "react-icons/fa";
import {GiChopsticks, GiNoodles} from "react-icons/gi";
import {List, SLink} from "./Styles";

const Category = () => {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
};

export default Category;