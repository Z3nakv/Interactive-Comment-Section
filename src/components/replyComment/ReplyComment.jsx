import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/context";

const ReplyComment = () => {

    const { comments, setNewComment, handleSetComments, newComment } = useContext(GlobalContext);
    const [value, setValue] = useState('');

    const inputRef = useRef(null);
    const reference = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleReplyValue = (e) => {
        setValue(e.target.value)
    }

    const handleReplySubmit = (e) => {
        e.preventDefault();
        
        const newObj = {
            "id": Date.now(),
            "content": value,
            "createdAt": "now",
            "score": 0,
            "replyingTo": newComment.user.username,
            "user": {
                "image": { 
                    "png": "/src/images/avatars/image-juliusomo.png",
                    "webp": "/src/images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo"
            }
        };

        const aux = [...comments];
        aux.map( item => {
            if(item.id === newComment.id){
                item.replies.push(newObj)
            }else if(item.replies && item.replies.length > 0) {
                item.replies.map(reply => {
                    if(reply.id === newComment.id){
                        item.replies.push(newObj)
                    }
                })
            }
        })
        
        setNewComment(null)
        handleSetComments(aux)
        setValue('')
    }

    function useOutsideClick(reference, handler) {

        useEffect(() => {
            function listener(e){
                if(!reference.current || reference.current.contains(e.target)){
                    return;
                }
                handler(e)
            }
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            }
        },[reference, handler])
        
    }

    useOutsideClick(reference, () => setNewComment(null))

    return (
        <div 
        className="ml-4 mb-4"
        ref={reference}
        >
            <div className="bg-white border border-black p-2 rounded-md">
            <form onSubmit={ handleReplySubmit }>
                <div className="flex flex-col p-3 gap-6 md:flex-row">
                <textarea
                    ref = {inputRef}
                    className="text-xl border-2 rounded-md h-32 p-4 placeholder:text-2xl placeholder:font-400 outline-moderateBlue resize-none md:grow"
                    name="comment"
                    cols="30"
                    rows="10"
                    placeholder="Add a comment..."
                    onChange={ handleReplyValue }
                    value={ value }
                >
                {`@${newComment.user.username}`}
                </textarea>
                
                    <button className="uppercase bg-moderateBlue text-white text-xl font-500 py-3.5 px-9 rounded-xl md:h-16 hover:bg-moderateBlue/40">
                    reply
                    </button>

                </div>
            </form>
            </div>
        </div>
    )
}

export default ReplyComment;