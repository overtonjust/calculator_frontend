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
        fireEvent.click(screen.getByText('x'));
        fireEvent.click(screen.getByText('x'));
        fireEvent.click(screen.getByText('4'));

        expect(display).toHaveTextContent('2x4')
    })
})