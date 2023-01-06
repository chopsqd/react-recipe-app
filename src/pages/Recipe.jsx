import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, DetailWrapper, Info} from "../components/Styles";

const Recipe = () => {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('Instructions')
    const params = useParams()

    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await api.json()
        setDetails(data)
    }

    useEffect(() => {
        fetchDetails()
    }, [params.id])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title}/>
            </div>
            <Info>
                <Button
                    className={activeTab === 'Instructions' ? 'active' : ''}
                    onClick={() => setActiveTab('Instructions')}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === 'Ingredients' ? 'active' : ''}
                    onClick={() => setActiveTab('Ingredients')}
                >
                    Ingredients
                </Button>
                {activeTab === 'Instructions' && <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}}/>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}/>
                </div>}
                {activeTab === 'Ingredients' && <ul>
                    {details.extendedIngredients.map(ingredient =>
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )}
                </ul>}
            </Info>
        </DetailWrapper>
    );
};

export default Recipe;