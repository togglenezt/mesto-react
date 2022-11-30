import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <>
                <input
                    type="url"
                    placeholder="Ссылка на аватарку"
                    className="form__field form__field_type_avatar-link"
                    id="avatar-input"
                    name="avatar"
                    required
                    ref={avatarRef}
                />
                <span className="form__text-error avatar-input-error"></span>
            </>
        </PopupWithForm>
    )
}