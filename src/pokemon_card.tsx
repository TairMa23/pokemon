import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function PokemonCard(props: any) {
    const [showImage, setShowImage] = useState(true);

    const toggleView = () => {
        setShowImage((prevShowImage) => !prevShowImage);
    };

    return (
        <Card className={`card-style ${showImage ? 'cosmic-background' : ''}`} onClick={toggleView}>
            {showImage ? (
                <Card.Img variant="top" src={props.poke.images.small} />
            ) : (
                <Card.Body className="card-body-style">
                    <Card.Title>{props.poke.name}</Card.Title>
                    <Card.Text>
                        subtypes: {props.poke.subtypes} : {props.poke.types}
                        <br />
                        level: {props.poke.level} hp: {props.poke.hp}
                        <br />
                        types: {props.poke.types}
                        {props.poke.flavorText}
                        <Card.Title>abilities</Card.Title>
                        {props.poke.abilities &&
                            props.poke.abilities.map((data) => (
                                <Card.Text key={data.name}>
                                    name: {data.name}
                                    <br />
                                    text: {data.text}
                                    <br />
                                    type: {data.type}
                                </Card.Text>
                            ))}
                        <Card.Img className="img" src={props.poke.set.images.symbol} />
                        <Card.Img className="img" src={props.poke.set.images.logo} />
                        <Card.Title>attack</Card.Title>
                    </Card.Text>
                </Card.Body>
            )}
        </Card>
    );
}

export default PokemonCard;
