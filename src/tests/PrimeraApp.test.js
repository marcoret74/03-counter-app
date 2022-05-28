import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp', () => {
    test('Debe de mostar el mensaje "Hola, soy Goku"', () => {
        const saludo = 'Hola, soy Goku';

        const { getByText } = render(<PrimeraApp saludo='Hola, soy Goku' />);

        // wrapper.getByText
        expect(getByText(saludo)).toBeInTheDocument();
    })
})