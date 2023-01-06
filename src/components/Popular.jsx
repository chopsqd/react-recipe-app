import {useEffect, useState} from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Card, Gradient, Wrapper} from "./Styles";
import {Link} from "react-router-dom";

const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const check = localStorage.getItem('popular')

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '1rem'
            }}>
                {popular.map(recipe =>
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

export default Popular;