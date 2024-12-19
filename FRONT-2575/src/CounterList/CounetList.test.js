import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterList } from "./CounterList";

describe("CounterList", () => {
  describe("При рендеринге", () => {
    it("Счетчик равен 0", () => {
      render(<CounterList />);
      const counter = screen.getByText("0");
      expect(counter).toBeInTheDocument();
    });
    it("Список на странице пустой", () => {
      render(<CounterList />);
      const listItems = screen.queryAllByRole("listitem");
      expect(listItems).toHaveLength(0);
    });
    it("При нажатии на кнопку счетчик увеличивается на 1", () => {
      render(<CounterList />);
      const button = screen.getByText("Нажми на меня");
      expect(button).toBeInTheDocument();

      const counter = screen.getByText("0");
      fireEvent.click(button);
      expect(counter.textContent).toBe("1");

      fireEvent.click(button);
      expect(counter.textContent).toBe("2");

      fireEvent.click(button);
      expect(counter.textContent).toBe("3");
    });
  });
});
