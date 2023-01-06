import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {Grid, GridCard} from "../components/Styles";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    const params = useParams()

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await api.json()
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

    return (
        <Grid>
            {cuisine.map(item =>
                <GridCard key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Link>
                </GridCard>
            )}
        </Grid>
    );
};

export default Cuisine;