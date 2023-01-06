import {useEffect, useState} from "react";
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Card, Gradient, Wrapper} from "./Styles";
import {Link} from "react-router-dom";

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie')

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json()
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }
    }

    useEffect(() => {
        getVeggie()
    }, [])

    return (
        <Wrapper>
            <h3>Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '1rem'
            }}>
                {veggie.map(recipe =>
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={`/recipe/${recipe.id}`}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient/>
                            </Link>
                        </Card>
                    </SplideSlide>
                )}
            </Splide>
        </Wrapper>
    );
};

export default Veggie;