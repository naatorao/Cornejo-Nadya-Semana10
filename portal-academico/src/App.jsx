import HeaderPagina from "./components/HeaderPagina";
import NavPagina from "./components/NavPagina";
import MainPagina from "./components/MainPagina";
import AsidePagina from "./components/AsidePagina";
import FooterPagina from "./components/FooterPagina";
import PanelPagina from "./components/panelpagina";

import "./App.css";

function App() {
  return (
    <>
      <HeaderPagina
        titulo="Portal Académico"
        institucion={'IESP "TRUJILLO"'}
      />

      <NavPagina />

      <div className="contenido">
        <MainPagina />
        <AsidePagina />
      </div>

      <section className="paneles">
        <PanelPagina titulo="Aviso académico">
          <p>Revisar las fechas de evaluación.</p>
        </PanelPagina>

        <PanelPagina titulo="Próximas actividades">
          <ul>
            <li>Taller de React</li>
            <li>Presentación de proyectos</li>
          </ul>
        </PanelPagina>
      </section>

      <FooterPagina
        anio={2027}
        programa="Diseño y Programación Web"
      />
    </>
  );
}

export default App;