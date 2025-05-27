'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface ContactFormProps {
  isEnglish: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isEnglish }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contacto" className="p-8 pt-10 rounded-lg relative">
      {showSuccess && (
        <div
          className="
            fixed top-6 left-1/2 transform -translate-x-1/2
            bg-cyan-600 text-white px-8 py-3 rounded-full shadow-lg
            flex items-center justify-center
            text-lg font-medium
            z-50
            animate-toastFade
          "
          role="alert"
        >
          {isEnglish ? 'Message sent successfully!' : '¡Mensaje enviado con éxito!'}
        </div>
      )}

      <h2 className="text-4xl font-semibold mb-8 text-center text-cyan-500">
        {isEnglish ? 'Contact' : 'Contacto'}
      </h2>

      <p className="text-gray-200 mb-6 text-center max-w-xl mx-auto">
        {isEnglish ? (
          <>
            You can contact me through the following form or on{' '}
            <Link
              href="https://www.linkedin.com/in/francisco-lopez-villa-91b317260/"
              className="text-[#0A66C2] hover:underline cursor-pointer font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            .
          </>
        ) : (
          <>
            Puedes contactarme a través del siguiente formulario o en{' '}
            <Link
              href="https://www.linkedin.com/in/francisco-lopez-villa-91b317260/"
              className="text-[#0A66C2] hover:underline cursor-pointer font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            .
          </>
        )}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-gray-200">
            {isEnglish ? 'Name' : 'Nombre'}
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-200 border border-gray-500 bg-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-200">
            {isEnglish ? 'Email Address' : 'Correo Electrónico'}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-200 border border-gray-500 bg-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-gray-200">
            {isEnglish ? 'Message' : 'Mensaje'}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 rounded-lg text-gray-200 border border-gray-500 bg-transparent resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-cyan-500 text-white px-6 w-full py-3 rounded-lg hover:bg-cyan-700 transition-colors mb-8"
        >
          {isEnglish ? 'Send' : 'Enviar'}
        </button>
        <div className="pb-4" />
      </form>

      <style jsx>{`
        @keyframes toastFade {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          10%,
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        .animate-toastFade {
          animation: toastFade 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
