import {fireEvent, render, screen} from "@testing-library/react";
import {InputForm} from "./InputForm";
describe('InputForm',()=> {
    it('При нажатии на кнопку Отправить длина иппутов не равно 0', () => {
        render(<InputForm />);
        const name = screen.getByLabelText('Имя:');
        const email = screen.getByLabelText('Email:');
        const submitButton = screen.getByText('Отправить');

        fireEvent.change(name, { target: { value: 'Олег' } });
        fireEvent.change(email, { target: { value: '123@mail.ru' } });
        fireEvent.click(submitButton);

        fireEvent.change(name, { target: length != 0 });
        fireEvent.change(email, { target: length != 0 });


    });
})