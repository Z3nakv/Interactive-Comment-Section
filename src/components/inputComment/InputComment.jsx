import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/context";

const InputComment = () => {

    const { globalData, comments, handleSetComments } = useContext(GlobalContext);

    const [profile, setProfile] = useState([]);
    const [ value, setValue] = useState('');
    

    useEffect(() => {
        setProfile(globalData?.currentUser)
    },[globalData])

    const handleCommentSubmit = ( e ) => {
        e.preventDefault();
        
        const newObj = {
            "id": Date.now(),
            "content": value,
            "createdAt": "now",
            "score": 0,
            "user": {
                "image": {
                    "png": "/src/images/avatars/image-juliusomo.png",
                    "webp": "/src/images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo",
            },
            "replies": [],
            };
        
        const aux = [...comments];

        handleSetComments([...aux, newObj])
        setValue('')
    }

    const handleValue = ( e ) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className="bg-white p-2 rounded-md">
            <form onSubmit={ handleCommentSubmit }>
                <div className="flex flex-col p-3 gap-6">
                <textarea
                    className="text-xl border-2 rounded-md h-32 p-4 placeholder:text-2xl placeholder:font-400 outline-moderateBlue resize-none"
                    name="comment"
                    cols="30"
                    rows="10"
                    placeholder="Add a comment..."
                    onChange={ handleValue }
                    value={ value }
                ></textarea>
                <div className="flex justify-between">
                    <img src={profile?.image?.png} alt={profile?.username} />
                    <button 
                    className="uppercase bg-moderateBlue text-white text-xl font-500 py-3.5 px-9 rounded-xl"
                    >
                    Send
                    </button>
                </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default InputComment;