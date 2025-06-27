const Informacion = ({anio, comisionProps}) => {
  return (
    <section>
      <h2>Primer proyecto con react</h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook para
        construir interfaces de usuario. <br/>Se destaca por su enfoque en creación
        de aplicaciones web de una sola página SPA y su capacidad para manejar
        la interfaz de manera eficiente mediante el uso de un <b>DOM virtual</b>.
      </p>
      <p>
        React permite a los desarrolladores construir interfaces dinámicas y
        reactivas de forma modular, lo que facilita el desarrollo y el
        mantenimiento de aplicaciones a gran escala.
      </p>
      <article className="bg-success-subtle p-3 rounded">
        <p>Practica de contador de la <strong>comision {comisionProps}</strong> - {anio} </p>
      </article>
    </section>
  );
};

export default Informacion;
