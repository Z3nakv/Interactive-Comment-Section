import { useContext } from "react"
import iconDelete from "../../images/icon-delete.svg"
import iconEdit from "../../images/icon-edit.svg"
import { GlobalContext } from "../context/context"
import ModalDelete from "../modal/modal"
import { ModalContext } from "../context/contextModal"

const CommentUserButtons = ({ comment }) => {
console.log(comment);
    const { comments, setUpdateState, setUpdateItem } = useContext(GlobalContext);
    const { handleShowModal, showModal } = useContext(ModalContext)

        
    const handleEdit = (currentId) => {
        let commentEdit = {};
        const aux = [...comments]
        comment.replyingTo
        ? aux.filter( item => item.replies.filter(reply => reply.id === currentId ? commentEdit=reply : reply))
        : aux.filter( item => commentEdit = item.id === currentId ? item : null)
        setUpdateState(true);
        setUpdateItem(commentEdit);
    }

    return (
            <div
            className="flex gap-4"
            key={comment?.id}>
                <button
                onClick={() => handleShowModal(comment) }
                className="text-xl capitalize text-softRed font-700 flex items-center gap-2 hover:text-softRed/40">
                    <span><img src={iconDelete} alt="" /></span>
                    <span>delete</span>
                </button>
                <button
                onClick={() => handleEdit(comment?.id) }
                className="text-xl capitalize text-moderateBlue/90 font-700 flex items-center gap-2 hover:text-moderateBlue/40">
                    <span><img src={iconEdit} alt="" /></span>
                    <span>edit</span>
                </button>
                {
                    showModal && <ModalDelete />
                }
            </div>
    )
}

export default CommentUserButtons;