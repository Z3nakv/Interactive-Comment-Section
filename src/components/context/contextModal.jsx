import { createContext, useContext, useState } from "react";
import GlobalState, { GlobalContext } from "./context";

export const ModalContext = createContext(null);

const ModalState = ({ children }) => {
    const { handleSetComments, comments } = useContext(GlobalContext);
    const [showModal, setShowModal] = useState(null);

    const handleShowModal = ( response ) => {
        console.log(response);
        setShowModal(response)
    }

    const handleDelete = (object) => {
        console.log(object);
        let aux;
        aux = object.replyingTo
        ? comments.filter( item => item.replies = item.replies.filter(reply => reply.id !== object.id))
        : comments.filter( item => item.id !== object.id)
        handleSetComments( aux )
        handleShowModal(null)
    }

    return (
        <ModalContext.Provider value={
            {
                handleShowModal,
                handleDelete,
                showModal
            }
        }>
            { children }
        </ModalContext.Provider>
    )
}

export default ModalState;