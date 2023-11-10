

export const NotesContent = () => {
  return (
    <>
        <div className="note-container">
            <div id="note-content">
            </div>

            <div className="note-edit">
                <h3>Editar Nota</h3>
                <label htmlFor="note-title">Título:</label>
                <input type="text" id="note-title" />

                <label htmlFor="note-date">Fecha:</label>
                <input type="text" id="note-date" disabled />

                <label htmlFor="note-text">Contenido:</label>
                <textarea id="note-text"></textarea>

                <button id="save-btn">Guardar Cambios</button>
            </div>
        </div>
    </>
  )
}
