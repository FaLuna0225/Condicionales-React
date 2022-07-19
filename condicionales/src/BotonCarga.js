import React from 'react'

export default function CargarBoton(props) {
    return (
        <div>
            {props.carga === "cargando"? <button>Cargando</button>
                : <button>Listo</button>
            }
        </div>
    )
}