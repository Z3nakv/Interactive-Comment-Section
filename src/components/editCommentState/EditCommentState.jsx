import { useContext, useState } from "react";
import { GlobalContext } from "../context/context";

const EditCommentState = ({ comment }) => {

    const { comments, handleSetComments, setUpdateState, setUpdateItem  } = useContext(GlobalContext);

    const [editValue, setEditValue] = useState(comment.content);
    
    const handleEditValue = (e) => {
        setEditValue(e.target.value)
    }

    const handleEditSubmit = ( e ) => {
        e.preventDefault();
        const aux = [...comments]
        aux.map( item => {
            if (item.id === comment.id) {
                item.content = editValue
            } else if (item.replies && item.replies.length > 0) {
                item.replies.map( reply => {
                    if( reply.id === comment.id ) {
                        reply.content = editValue
                    }
                } );
            }
        });
            setUpdateState(false);
            setUpdateItem([]);
            handleSetComments( aux );
    }

    return (
        <div key={comment?.id} id={comment?.id}>
            <div className="bg-white border border-black p-5 rounded-md relative flex flex-col gap-4 mb-4">
            <div className="flex items-center gap-5">
                <img src={comment?.user?.image?.png} alt="foto" className="h-8" />
                <h2 className="font-700 text-black/60">
                {comment?.user?.username}
                </h2>
                <span className="text-grayishBlue/70 font-400">
                {comment?.createdAt}
                </span>
            </div>
            <form onSubmit={ handleEditSubmit }>
                <div>
                    <textarea 
                    className="text-xl p-4 text-grayishBlue/70 font-500 w-full resize-none outline-moderateBlue h-24 max-h-28"
                    onChange={ handleEditValue }
                    value={ editValue }
                    >
                    { editValue }
                    </textarea>
                </div>
                <div className="flex justify-between">
                        <img src={comment?.image?.png} alt={comment?.username} />
                        <button className="uppercase bg-moderateBlue text-white text-xl font-500 py-3.5 px-9 rounded-xl hover:bg-moderateBlue/40">
                        update
                        </button>
                    </div>
            </form>
            </div>
        </div>
    );
}

export default EditCommentState;