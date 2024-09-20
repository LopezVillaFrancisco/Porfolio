'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ContactFormProps {
  isEnglish: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isEnglish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <section id="contacto" className="p-8 pt-10 rounded-lg">
      <h2 className="text-4xl font-semibold mb-8 text-center text-orange-500">
        {isEnglish ? 'Contact' : 'Contacto'}
      </h2>
      <p className="text-gray-300 mb-6">
        {isEnglish 
          ? 'You can contact me through the following form or on social media.'
          : 'Puedes contactarme a través del siguiente formulario o en las redes sociales.'}
      </p>
      <form
        action="https://formspree.io/f/mblrbpaq"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label htmlFor="nombre" className="block text-gray-300">
            {isEnglish ? 'Name' : 'Nombre'}
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-300 border border-gray-700 bg-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300">
            {isEnglish ? 'Email Address' : 'Correo Electrónico'}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-300 border border-gray-700 bg-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-gray-300">
            {isEnglish ? 'Message' : 'Mensaje'}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 rounded-lg text-gray-300 border border-gray-700 bg-transparent resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 w-full py-3 rounded-lg hover:bg-orange-700 transition-colors mb-8" 
        >
          {isEnglish ? 'Send' : 'Enviar'}
        </button> 
        <div className='pb-4'/>
      </form>
    </section>
  );
};

export default ContactForm;
