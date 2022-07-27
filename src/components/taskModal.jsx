import React from "react";
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux";
import { create } from '../store/todo'

export default function TaskModal({ isShowing, hide }) {
    /* A hook that allows you to use state in a functional component. */
    const dispatch = useDispatch()

    /* A hook that allows you to use state in a functional component. */
    const [task, setTask] = React.useState({
        id: "",
        title: "",
        description: "",
        state: false,
    }) 

    const [errorMessage, setErrorMessage] = React.useState()

    /**
     * If the task title is not empty, hide the modal and dispatch the create action.
     */
    const save = () => {
        if (task.title !== "") {
            setErrorMessage("")
            hide()
            dispatch(create(task))
        } 
        if (task.title === "") {
            setErrorMessage("Please enter a title")
        }
    }

    return (
        isShowing
        ? ReactDOM.createPortal(
            <>
                <div className="modal-overlay">
                <div className="modal-wrapper">
                    <div className="modal">
                    <div className="modal-header">
                        <h2>Ajouter une tâche</h2>
                        <button
                        type="button"
                        className="modal-close-button"
                        onClick={hide}
                        >
                        <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="addForm">
                            <div className="input-wrapper">
                                <label htmlFor="title">Title</label>
                                <input autofocus type="text" id="title" value={task.title} onChange={(event)=>setTask({...task, title:event.target.value})}/>
                                <p className="errorMessage">{errorMessage}</p>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="5" cols="33" maxLength={300} value={task.description} onChange={(event)=>setTask({...task, description:event.target.value})}/>
                            </div>
                            <div className="validateButton">
                                <button type="button" className="button-save" onClick={save}>Ajouter</button>
                            </div>
                    </form>
                    </div>
                    </div>
                </div>
                </div>
            </>,
            document.body
            )
        : null
    )
}

/* const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h2>Ajouter une tâche</h2>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form className="addForm">
                        <div className="input-wrapper">
                            <label htmlFor="title">Title</label>
                            <input autofocus type="text" id="title"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" rows="5" cols="33" maxLength={300}/>
                        </div>
                        <div className="validateButton">
                            <button type="button" className="button-save">Ajouter</button>
                        </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal; */

/* export default function TaskModal(props) {
    return (
        <div className="modal">
            
        </div>
    )
} */