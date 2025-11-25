import { useState } from 'react';
import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const showAlert = (type, message) => {
        setAlert({ show: true, type, message });
        setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
    };

    const getEmailJSConfig = () => {
        const config = {
            serviceId: import.meta.env.VITE_SERVICE_ID,
            templateId: import.meta.env.VITE_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_PUBLIC_KEY
        };

        // Validar que todas las variables existan
        const missingVars = Object.entries(config)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (missingVars.length > 0) {
            console.error('Variables de entorno faltantes:', missingVars);
            return null;
        }

        return config;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = getEmailJSConfig();
        if (!config) {
            showAlert('error', 'Error de configuración. Contacta al administrador.');
            return;
        }

        console.log('Datos a enviar:', {
            subject: formData.subject,
            fullSubject: `Contacto Peluches Yakky: ${formData.subject}`
        });



        setIsLoading(true);

        try {
            const result = await emailjs.send(
                config.serviceId,
                config.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,

                },
                config.publicKey
            );

            if (result.text === 'OK') {
                showAlert('success', '¡Mensaje enviado! Te contactaremos pronto.');
                // Limpiar formulario
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error enviando email:', error);
            showAlert('error', 'Error al enviar el mensaje. Intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <Header />

            {alert.show && (
                <div className={`alert ${alert.type}`}>
                    {alert.message}
                </div>
            )}

            <main className="contact-main">
                {/* Hero Section */}
                <section className="contact-hero">
                    <div className="container">
                        <h1>Contáctanos</h1>
                        <p>Estamos aquí para ayudarte. Visítanos o escríbenos.</p>
                    </div>
                </section>

                <div className="container">
                    <div className="contact-layout">
                        {/* Información de Contacto */}
                        <div className="contact-info">
                            <h2>Visita Nuestro Taller</h2>
                            <p className="contact-description">
                                Te invitamos a conocer nuestro taller artesanal donde damos vida
                                a cada peluche. Contempla el proceso creativo y elige tu compañero perfecto.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-text">
                                        <h3>Dirección</h3>
                                        <p>Calle 204c #38-58, Los Andes<br />Floridablanca, Santander<br />Colombia</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-text">
                                        <h3>Teléfono</h3>
                                        <p>+57 302 8116748</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">✉️</div>
                                    <div className="contact-text">
                                        <h3>Email</h3>
                                        <p>yakkypeluches@gmail.com</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">🕒</div>
                                    <div className="contact-text">
                                        <h3>Horario de Atención</h3>
                                        <p>Lunes a Viernes: 9:00 AM - 6:00 PM<br />Sábados: 10:00 AM - 4:00 PM<br />Domingos: Cerrado</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-contact">
                                <h3>Síguenos en Redes Sociales</h3>
                                <div className="social-links-grid">
                                    <a href="https://wa.me/573028116748" className="social-link-item">
                                        <i className="bi bi-whatsapp"></i>
                                        <span className="social-platform">WhatsApp</span>
                                    </a>
                                </div>
                            </div>


                        </div>

                        {/* Mapa y Formulario */}
                        <div className="contact-interactive">
                            {/* Mapa */}
                            <div className="map-section">
                                <h2>Encuéntranos Aquí</h2>
                                <div className="map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2345678901234!2d-73.12123456789012!3d7.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683a1a2b3c4d5e%3A0x1234567890abcdef!2sCalle%20204c%20%2338-58%2C%20Los%20Andes%2C%20Floridablanca%2C%20Santander%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0, borderRadius: '4px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación de Peluches Artesanales"
                                    ></iframe>
                                    <div className="map-actions">
                                        <a
                                            href="https://maps.google.com/?q=Calle+204c+%2338-58,+Los+Andes,+Floridablanca,+Santander,+Colombia"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                        >
                                            Abrir en Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Formulario de Contacto */}
                            <div className="form-section">
                                <h2>Envíanos un Mensaje</h2>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Nombre Completo *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Teléfono</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Asunto *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Selecciona un asunto</option>
                                                <option value="Consulta General">Consulta General</option>
                                                <option value="Pedido Especial">Pedido Especial</option>
                                                <option value="Peluche Personalizado">Peluche Personalizado</option>
                                                <option value="Problema con Pedido">Problema con Pedido</option>
                                                <option value="Otros">Otros</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Mensaje *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos en qué podemos ayudarte..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                                    </button>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="container">
                        <h2>Preguntas Frecuentes</h2>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h3>¿Hacen envíos a todo Colombia?</h3>
                                <p>Sí, realizamos envíos a todo el país mediante servientrega y coordinamos la logística para que tu peluche llegue seguro.</p>
                            </div>
                            <div className="faq-item">
                                <h3>¿Puedo personalizar un peluche?</h3>
                                <p>¡Absolutamente! Especializamos en creaciones personalizadas. Contáctanos para discutir tu idea.</p>
                            </div>
                            <div className="faq-item">
                                <h3>¿Cuánto tiempo toma una pieza personalizada?</h3>
                                <p>Depende de la complejidad, generalmente entre 2-4 semanas. Te mantenemos informado durante todo el proceso.</p>
                            </div>
                            <div className="faq-item">
                                <h3>¿Los materiales son seguros para niños?</h3>
                                <p>Todos nuestros materiales son naturales, no tóxicos y cumplen con los más altos estándares de seguridad.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;