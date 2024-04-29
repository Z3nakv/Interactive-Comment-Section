import { useContext } from 'react';
import replyIcon from '../../images/icon-reply.svg';
import Buttons from '../buttons/button';
import CommentUserButtons from '../commentUserButtons';
import { GlobalContext } from '../context/context';
import EditCommentState from '../editCommentState/EditCommentState';
import ReplyComment from '../replyComment/ReplyComment';
import InputComment from '../inputComment/InputComment';

const Commentary = () => {

    const { comments, updateState, updateItem , handleReplyComment, newComment } = useContext(GlobalContext);

    return (
        <div className='p-4 md:max-w-3xl md:mx-auto'>
            {
            comments && comments.map( item => (
                updateState && updateItem.id === item.id
                ? <EditCommentState comment={ item } />
                :
                <div>
                    <div key={item?.id} id={item?.id} 
                    className="bg-white p-5 rounded-md relative flex flex-col gap-4 mb-4 md:flex-row-reverse">
                        <div className='w-full'>
                            <div className="flex items-center gap-5">
                                <img src={`${item?.user?.image?.png}`} alt="foto" className="h-10" />
                                <h2 className="text-xl mr-6 font-700 text-black/60">{item?.user?.username}</h2>
                                <span className="text-grayishBlue/70 font-400">
                                {item?.createdAt}
                                </span>
                            </div>
                            <div className='mt-2'>
                                <p className="text-xl text-grayishBlue/70 font-500">
                                {item?.content}
                                </p>
                            </div>
                        </div>
                        <Buttons score={item?.score} />
                        <div className="flex items-center gap-2 absolute bottom-6 right-6 md:bottom-auto md:top-5">
                        {
                            item?.user?.username === 'juliusomo' 
                            ? <CommentUserButtons comment={ item } />
                            : 
                            <div className='cursor-pointer flex items-center gap-2'>
                                <img className="h-4" src={replyIcon} alt="compartir" />
                                <p 
                                className="capitalize text-lg text-moderateBlue/90 font-500 hover:text-moderateBlue/40"
                                onClick={() => handleReplyComment(item) }
                                >
                                    reply
                                </p>
                            </div>
                        }
                        </div>
                    </div>
                    <div className='border-l-4 border-gray-300 md:ml-10'>
                            {
                                item?.replies?.length > 0 && item?.replies.map( reply => (
                                    updateState && updateItem.id === reply.id
                                    ? <EditCommentState comment={ reply } />
                                    :
                                <div
                                key={reply?.id} id={reply?.id} 
                                className="bg-white p-5 rounded-md relative flex flex-col gap-4 ml-4 mb-4 md:flex-row-reverse md:ml-12">
                                <div className='w-full'>
                                    <div className="flex items-center gap-5">
                                        <img src={reply?.user?.image?.png} alt="foto" className="h-10" />
                                        <h2 className="text-xl mr-6 font-700 text-black/60">{reply?.user?.username}</h2>
                                        <span className="text-grayishBlue/70 font-400">
                                        {reply?.createdAt}
                                        </span>
                                    </div>
                                    <div className='mt-2'>
                                        <p className="text-xl text-grayishBlue/70 font-500">
                                            <span className='text-moderateBlue/90'>{'@' + reply?.replyingTo + ' '}</span>
                                        { reply?.content}
                                        </p>
                                    </div>
                                </div>
                                <Buttons score={reply?.score} />
                                <div className="flex items-center gap-2 absolute bottom-6 right-6 md:bottom-auto md:top-5">
                                    {
                                        reply?.user?.username === 'juliusomo' 
                                        ? <CommentUserButtons comment={reply} />
                                        : 
                                        <div className='cursor-pointer flex items-center gap-2 '>
                                            <img className="h-4" src={replyIcon} alt="compartir" />
                                            <p 
                                            className="capitalize text-lg text-moderateBlue/90 font-500 hover:text-moderateBlue/40"
                                            onClick={() => handleReplyComment(reply) }
                                            >
                                                reply
                                            </p>
                                        </div>
                                    }
                                </div>
                            </div>
                            ))
                        }
                        {
                            newComment && newComment.replyingTo === item.user.username || newComment && newComment.id === item.id
                            ? <ReplyComment />
                            : null
                        }
                    </div>
                </div>
            ))}
            <InputComment />
        </div>
    );
}

export default Commentary;