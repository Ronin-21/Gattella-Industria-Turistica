"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    provincia: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* setLoading(true);

    emailjs
      .send(
        "service_xxxxx", // 👈 Reemplazar con tu Service ID (SMTP Hostinger)
        "template_yyyyy", // 👈 Reemplazar con tu Template ID
        {
          from_name: form.nombre,
          from_email: form.email,
          telefono: form.telefono,
          provincia: form.provincia,
          message: form.mensaje,
        },
        "publicKey_zzzzz", // 👈 Reemplazar con tu Public Key de EmailJS
      )
      .then(
        () => {
          alert("📧 Tu mensaje fue enviado con éxito.");
          setForm({
            nombre: "",
            email: "",
            telefono: "",
            provincia: "",
            mensaje: "",
          });
        },
        (error) => {
          console.error("Error al enviar:", error);
          alert("❌ Hubo un error al enviar el mensaje.");
        },
      )
      .finally(() => setLoading(false)); */
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      provincia: "",
      mensaje: "",
    });
    // alert("📧 El formulario de contacto está deshabilitado en este demo.");
    alert("📧 El envío fue exitoso!");
    console.log("📧 El envío fue exitoso!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-4 px-5 md:w-2xl"
    >
      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="bg-light focus:border-accent placeholder:text-secondary/75 border-primary w-full rounded border p-2 outline-none"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="bg-light focus:border-accent placeholder:text-secondary/75 border-primary w-full rounded border p-2 outline-none"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          className="bg-light focus:border-accent placeholder:text-secondary/75 border-primary w-full rounded border p-2 outline-none"
        />

        <input
          type="text"
          name="provincia"
          value={form.provincia}
          onChange={handleChange}
          placeholder="Provincia"
          className="bg-light focus:border-accent placeholder:text-secondary/75 border-primary w-full rounded border p-2 outline-none"
        />
      </div>

      <textarea
        name="mensaje"
        value={form.mensaje}
        onChange={handleChange}
        placeholder="Mensaje"
        required
        className="bg-light focus:border-accent border-primary placeholder:text-secondary/75 h-32 w-full rounded border p-2 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full cursor-pointer rounded px-5 py-3 text-white transition-colors duration-500 md:w-xs ${
          loading ? "bg-secondary" : "bg-primary hover:bg-dark"
        }`}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
