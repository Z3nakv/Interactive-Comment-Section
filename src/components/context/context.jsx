import { createContext, useEffect, useState  } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [globalData, setGlobalData] = useState([]);
    const [updateState, setUpdateState] = useState(false);
    const [updateItem, setUpdateItem] = useState([]);
    const [newComment, setNewComment] = useState(null);

    const fetchCommentsData = async () => {
        try {
            const response = await fetch('../../data.json')
            const data = await response.json();
            if(data.comments.length){
                setGlobalData(data)
                setComments(data.comments)
            }
        } catch (error) {
            console.log(error.message);
        }
        
    }
    
    useEffect(() => {
        fetchCommentsData();
    },[]);

    const handleReplyComment = ( username ) => {
        setNewComment(username);
    }
        
        const handleSetComments = ( auxArr ) => {
            setComments( auxArr )
        }


    return (
        <GlobalContext.Provider value={
            {
                globalData,
                comments,
                updateState,
                setUpdateState,
                updateItem,
                setUpdateItem,
                handleReplyComment,
                newComment,
                setNewComment,
                handleSetComments,
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalState;


