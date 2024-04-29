import { useContext } from "react";
import { ModalContext } from "../context/contextModal";

const ModalDelete = ( ) => {

    const { handleShowModal, handleDelete, showModal } = useContext(ModalContext);

    return (
        <div className="absolute top-0 h-full w-full bg-slate-500/50">
            <div className="bg-veryLightGray h-60 w-72 p-5 flex flex-col justify-between rounded-xl fixed top-[calc(50%-120px)] left-[calc(50%-144px)]">
                <h3 className="capitalize font-500 text-xl">delete comment</h3>
                <p className="text-grayishBlue/90 font-400">Are you sure you want to delete this coment? This will remove the comment and can't be undone</p>
                <div className="flex justify-around">
                    <button 
                    className="bg-grayishBlue uppercase text-white p-3 rounded-lg"
                    onClick={() => handleShowModal(null) }
                    >
                        no, cancel
                    </button>
                    <button 
                    className="bg-softRed uppercase text-white p-3 rounded-lg"
                    onClick={() => {
                        handleDelete( showModal )
                    } }
                    >
                        yes, delete
                    </button>
                </div>
            </div>
        </div>
    )
} 

export default ModalDelete;