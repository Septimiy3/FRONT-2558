import React, { useState, useEffect } from 'react';
import './index.css';

export const MainForm = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : { name: '', email: '', message: '' };
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Форма успешно отправлена!');

        setFormData({ name: '', email: '', message: '' });
        localStorage.removeItem('formData');
    };

    return (
        <form onSubmit={handleSubmit} className="main-form">
            <div>
                <label htmlFor="name" className="main-form__label">Имя:</label>
                <input
                    className="main-form__input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                />
            </div>
            <div>
                <label htmlFor="email" className="main-form__label">Email:</label>
                <input
                    className="main-form__input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введите ваш email"
                />
            </div>
            <div>
                <label htmlFor="message" className="main-form__label">Сообщение:</label>
                <textarea
                    className="main-form__input"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Введите сообщение"
                />
            </div>
            <button type="submit" className="form__submit">Отправить</button>
        </form>
    );
};

