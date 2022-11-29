import React from 'react';
import Card from './Card';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
    
        api.changeLikeCardStatus(isLiked, card._id)
          .then((updateCard) => {
            const updatedCards = cards.map((c) => (c._id === card._id ? updateCard : c))
            setCards(updatedCards);
          })
          .catch((err) => {
            console.log(err);
          })
      }

      function handleCardDelete(card) {
        api.deleteCard(card._id)
          .then(() => {
            const updatedCards = cards.filter((c) => (c._id !== card._id))
            setCards(updatedCards)
          })
          .catch((err) => {
            console.log(err);
          })
      }

    React.useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile" aria-label="Профиль">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__avatar" />
                        <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__text">
                        <div className="profile__edit-container">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery" aria-label="Фото галлерея">
                {cards.map(card => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={handleCardLike}
                        onCardDeleteClick={handleCardDelete}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;