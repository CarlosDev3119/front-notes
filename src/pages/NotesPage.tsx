import { notesApi } from "../api/notesApi"
import { NotesContent } from "../components/NotesContent"
import { SidebarNotes } from "../components/SidebarNotes"


export const NotesPage = () => {

  const handleApi = async () => {
    const response = await notesApi.get('/notes');
    console.log(response.data)
  }

  return (
    <>
        
        <div className="container">

            <SidebarNotes />
            
            <NotesMainContent />

            <button onClick={handleApi}>api</button>
            
        </div>

    </>
  )
}

export const NotesMainContent = () => {
  return (
    <>
            <div className="content">
                <h2>Contenido</h2>
                <button id="add-btn">Agregar Nota</button>
                <button id="delete-all-btn">Borrar Todas las Notas</button>

                <NotesContent />
            </div>
    </>
  )
}

