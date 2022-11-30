import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    // Обработчик изменения инпута имени
    function handleChangeName(e) {
        setName(e.target.value);
    }

    // Обработчик изменения инпута О себе
    function handleChangeAbout(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
      } 

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <>
                <input
                    type="text"
                    placeholder="Имя"
                    className="form__field form__field_type_name"
                    id="name-input" name="name"
                    required minLength="2"
                    maxLength="40"
                    value={name || ""}
                    onChange={handleChangeName}
                />
                <span className="form__text-error name-input-error"></span>
                <input
                    type="text"
                    placeholder="О себе"
                    className="form__field form__field_type_job"
                    id="job-input"
                    name="about"
                    required minLength="2"
                    maxLength="200"
                    value={description || ""}
                    onChange={handleChangeAbout}
                />
                <span className="form__text-error job-input-error"></span>
            </>
        </PopupWithForm>
    )
}