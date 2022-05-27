import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
// Functional Component
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi primera aplicación</p>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired      
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}

export default PrimeraApp;