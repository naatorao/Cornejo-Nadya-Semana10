function PanelPagina({ titulo, children }) {
    return (
        <section className="panel">
            <h3>{titulo}</h3>
            <div className="contenido">
                {children}
            </div>
        </section>
    );
}

export default PanelPagina;
