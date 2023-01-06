import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {Card, Grid} from "../components/Styles";

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    const params = useParams()

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await api.json()
        setSearchedRecipes(recipes.results)
    }

    return (
        <Grid>
            {searchedRecipes.map(recipe =>
                <Card key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                        <img src={recipe.image} alt={recipe.title}/>
                        <h4>{recipe.title}</h4>
                    </Link>
                </Card>
            )}
        </Grid>
    );
};

export default Searched;