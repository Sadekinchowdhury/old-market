import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';


const Review = ({ review, refetch }) => {
    const { user, users, notiNumber, setNotiNumber, } = useContext(AuthContext)


    const { name, comment, reviewDate, image } = review;
    const startDate = new Date(reviewDate)
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);


    let timeDifferenceMessage = '';
    if (days >= 1) {
        timeDifferenceMessage = `${days} days`;
    } else if (hours >= 1) {
        timeDifferenceMessage = `${hours} hours`;
    } else if (minutes >= 1) {
        timeDifferenceMessage = `${minutes} minutes`;
    } else {
        timeDifferenceMessage = `${seconds} seconds`;
    }
    const [loading, setLoading] = React.useState(true);
    const handlDelete = (reviewId, userEmail) => {

        fetch(`https://old-server.vercel.app/review/${reviewId}/${userEmail}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {

                    toast(`You are successfully deleted `)
                    setLoading(false)

                }

            })
    }


    return (
        <>
            {
                loading && <div className='flex justify-between py-4 p-2 w-full s  lg:w-10/12 mx-auto'>
                    <div className='w-2/12'>
                        <img className='w-10 h-10 rounded-full' src={review?.image} alt="" />
                    </div>

                    <div className='w-10/12'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[16px] font-semibold mb-3'>{name}</p>

                            </div>

                            <div className='flex cursor-pointer items-center gap-1'>
                                <h1 className='flex items-center'>{timeDifferenceMessage} ago </h1> <AiFillDelete onClick={() => handlDelete(review?._id, user?.email)} size={20} /> <FaEllipsisV />
                            </div>




                        </div>
                        <p className='pr-3'>{comment}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Review;