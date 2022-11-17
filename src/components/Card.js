import React from 'react';

export default function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="place">
            <img src={props.card.link} alt={props.card.name} className="place__image" onClick={handleClick} />
            <div className="place__text">
                <h2 className="place__title">{props.card.name}</h2>
                <div className="place__like-display">
                    <button className="place__like" type="button"></button>
                    <p className="place__like-counter" name="">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="place__delite-button"></button>
        </article>
    )
}
