import React from "react";
import useModal from "./useModal";
import Modal from "./taskModal";

export default function TaskControl(props) {
    /* Destructuring the object returned by the useModal hook. */
    const { isShowing, toggle } = useModal();

    return (
        <>
            <button onClick={toggle}>Ajouter une tâche</button>
            <Modal isShowing={isShowing} hide={toggle}/>
        </>
    )
}