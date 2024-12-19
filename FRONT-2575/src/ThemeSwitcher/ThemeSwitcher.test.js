import {ThemeSwitcher} from "./ThemeSwitcher";
import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";

describe('ThemeSwitcher',()=> {
    it('При нажатии на кнопку, тема переключается со светлой на темную', () => {
        render(<ThemeSwitcher/>)
        const button = screen.getByRole("button", { name: /Переключить на.*тёмную.*тему/i });
        expect(document.body.className).toBe("lightTheme");
        fireEvent.click(button)
        expect(document.body.className).toBe("darkTheme")

    });
})