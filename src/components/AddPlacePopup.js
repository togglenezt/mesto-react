import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {


    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({name, link});
    }

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    // Обработчик изменения инпута имени
    function handleChangeName(e) {
        setName(e.target.value);
    }

    // Обработчик изменения инпута О себе
    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <>
                <input
                    type="text"
                    placeholder="Название"
                    className="form__field form__field_type_place-name"
                    name="name"
                    id="place-name-input"
                    required minLength="2"
                    maxLength="30"
                    value={name || ""}
                    onChange={handleChangeName}
                />
                <span className="form__text-error place-name-input-error"></span>
                <input
                    type="url"
                    placeholder="Ссылка на картинку"
                    className="form__field form__field_type_place-link"
                    id="place-link-input"
                    name="link"
                    required
                    value={link || ""}
                    onChange={handleChangeLink}
                />
                <span className="form__text-error place-link-input-error"></span>
            </>
        </PopupWithForm>
    )
}