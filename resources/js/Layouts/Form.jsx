import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
    
    // Estados para los datos del formulario y para mostrar mensajes de error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        phone: '',
        asunto: '',
        message: '',
        checked: false
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        city: '',
        phone: '',
        asunto: '',
        message: '',
        checked: ''
    });
    const [isValid, setIsValid] = useState(false);

    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPhone = /^[0-9]{10}$/;

    useEffect(() => {
        // Verifica si el formulario es válido para habilitar el botón de enviar
        const allFieldsFilled = Object.values(formData).every(value => value !== '' && (value !== false));
        const noErrors = Object.values(errors).every(error => error === '');
        setIsValid(allFieldsFilled && noErrors);
    }, [formData, errors]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Actualiza los datos del formulario
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Validación en base al tipo de entrada
        let error = '';
        if (type === 'text' || type === 'textarea') {
            if (value === '' || value.length <= 2) {
                error = 'Este campo es obligatorio y debe tener más de dos caracteres.';
            }
        } else if (type === 'email') {
            if (!regexEmail.test(value)) {
                error = 'El correo electrónico no es válido.';
            }
        } else if (type === 'tel') {
            if (!regexPhone.test(value)) {
                error = 'El número de teléfono debe tener 10 dígitos.';
            }
        } else if (type === 'checkbox') {
            error = !checked ? 'Debe aceptar las políticas de privacidad.' : '';
        }

        setErrors(prevState => ({
            ...prevState,
            [name]: error
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/contact', formData);
            if (response.status === 200) {
                window.location.href = '/';  // Redirige a la página de inicio
            }
        }catch (error) {
            alert('Hubo un error al enviar el formulario.');
            console.error('Error al enviar el formulario:', error);
        }
    };

    return(
        <>
        <section className="seccion-text">
            <form id="contact" action="contact" method="post" autoComplete="off" onSubmit={handleSubmit}>
                <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />

                <div className="contac-formul">
                    <div className="contac-formul-div">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre *"
                            value={formData.name}
                            onChange={handleChange}
                            className={"form-control ${errors.name ? 'is-invalid' : ''}"}
                        />
                        <span className={"color-blanc ${errors.name ? 'is-invalid' : ''}"}>{errors.name}</span>
                    </div>
                    <div className="contac-formul-div">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo *"
                            value={formData.email}
                            onChange={handleChange}
                            className={"form-control ${errors.email ? 'is-invalid' : ''}"}
                        />
                        <span className="color-blanc ${errors.name ? 'is-invalid' : ''}">{errors.email}</span>
                    </div>
                    <div className="contac-formul-div">
                        <input
                            type="text"
                            name="city"
                            placeholder="Ciudad *"
                            value={formData.city}
                            onChange={handleChange}
                            className={"form-control ${errors.city ? 'is-invalid' : ''}"}
                        />
                        <span className="color-blanc">{errors.city}</span>
                    </div>
                    <div className="contac-formul-div">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Teléfono *"
                            value={formData.phone}
                            onChange={handleChange}
                            className={"form-control ${errors.phone ? 'is-invalid' : ''}"}
                        />
                        <span className="color-blanc">{errors.phone}</span>
                    </div>
                </div>
                <div className="contac-formul">
                    <div className="contac-formul-div">
                        <input
                            type="text"
                            name="asunto"
                            placeholder="Asunto *"
                            value={formData.asunto}
                            onChange={handleChange}
                            className={"form-control ${errors.asunto ? 'is-invalid' : ''}"}
                        />
                        <span className="color-blanc">{errors.asunto}</span>
                    </div>
                    <div className="contac-formul-div">
                        <textarea
                            name="message"
                            id="mensaje"
                            cols="70"
                            rows="5"
                            placeholder="Mensaje * Estimado proveedor este 'FORMULARIO' es para uso exclusivo del área de ventas y servicio a clientes. En caso de que usted esté interesado en hacernos llegar información sobre sus promociones, productos o servicios, hágalo por favor al siguiente correo: compras@magicpop.com.mx y evite que su correo sea reportado como SPAM. Gracias."
                            value={formData.message}
                            onChange={handleChange}
                            className={"form-control ${errors.message ? 'is-invalid' : ''}"}
                        ></textarea>
                    </div>
                    <div className="contac-formul-div">
                        <button type="submit" className={"form-control form-button ${!isValid ? 'none' : ''}"} disabled={!isValid}>Enviar</button>
                    </div>
                    <div className="contac-formul-div color-blanc">
                        <label className="contac-formul-div-politics">
                            <input
                                type="checkbox"
                                name="checked"
                                checked={formData.checked}
                                onChange={handleChange}
                                className="form-control"
                            />
                            Políticas de Privacidad
                            <br />
                            <small>
                                El Aviso de Privacidad es un documento que informa a
                                los usuarios sobre el manejo de sus datos personales.
                                Existen tres tipos de Avisos de Privacidad: Integral,
                                Simplificado y Corto, cada uno adaptado a distintas
                                necesidades y situaciones. El Aviso de Privacidad
                                establece las prácticas y condiciones que los usuarios
                                deben conocer y aceptar al interactuar con diversos
                                contenidos, productos o servicios.
                            </small>
                        </label>
                        <span>{errors.checked}</span>
                    </div>
                </div>
            </form>
        </section>
        </>
    );
}