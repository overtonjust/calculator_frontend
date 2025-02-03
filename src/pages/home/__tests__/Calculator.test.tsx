import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, it, expect } from "vitest";
import Calculator from "../features/Calculator";

describe('Calculator', () => {
    it('should render the calculator', () => {
        render(<Calculator/>);
        expect(screen.getByText('AC')).toBeInTheDocument();
    });

    it('should update display when number buttons are clicked', () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('3'));
        expect(screen.getByText('123')).toBeInTheDocument();
    });

    it("should clear the display when 'AC' is clicked ", () => {
        render(<Calculator />);
        const display = screen.getByTestId('calcScreen');
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('7'));
        fireEvent.click(screen.getByText('5'));
        fireEvent.click(screen.getByText('AC'));

        expect(display).toHaveTextContent('');
    });

    it("should only allow for one operation between numbers", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('*'));
        fireEvent.click(screen.getByText('*'));
        fireEvent.click(screen.getByText('4'));

        expect(display).toHaveTextContent('2*4');
    });

    it("should only remove the most recent character when backspace is clicked", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        const backSpace = screen.getByTestId('backSpace');

        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('+'));
        fireEvent.click(screen.getByText('4'));
        fireEvent.click(backSpace);
        fireEvent.click(screen.getByText('3'));

        expect(display).toHaveTextContent('2+3');
    });

    it("should print the result of adding two numbers", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        const equals = screen.getByTestId('equals');
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('+'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(equals);

        expect(display).toHaveTextContent('4');
    });

    it("should print the result of subtracting two numbers", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        const equals = screen.getByTestId('equals');
        fireEvent.click(screen.getByText('4'));
        fireEvent.click(screen.getByText('-'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(equals);

        expect(display).toHaveTextContent('2');
    });

    it("should print the result of multiplying two numbers", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        const equals = screen.getByTestId('equals');
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('*'));
        fireEvent.click(screen.getByText('3'));
        fireEvent.click(equals);

        expect(display).toHaveTextContent('6');
    });

    it("should print the result of dividing two numbers", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        const equals = screen.getByTestId('equals');
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));
        fireEvent.click(screen.getByText('/'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(equals);

        expect(display).toHaveTextContent('5');
    });

    it("should print an error when a user doesn't input valid arithmatic", () => {
        render(<Calculator/>);
        const display = screen.getByTestId('calcScreen');
        const equals = screen.getByTestId('equals');
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('/'));
        fireEvent.click(equals);

        expect(display).toHaveTextContent('Error');
    });

})