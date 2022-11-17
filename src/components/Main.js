import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((user) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
                        <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
                        <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__text">
                        <div className="profile__edit-container">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
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
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;