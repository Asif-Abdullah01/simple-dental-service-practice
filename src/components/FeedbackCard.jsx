
// eslint-disable-next-line react/prop-types
const FeedbackCard = ({ feedback }) => {
    // eslint-disable-next-line react/prop-types
    const { name, review, userImg } = feedback;
    // console.dir(new Date());
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="p-6">
                <div className='flex gap-2 justify-between items-center'>
                    <img className='w-12 h-12 rounded-full' src={userImg} alt="" />
                    <h2 className="card-title">{name}</h2>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
                <p>{review}</p>
                <div className="card-actions justify-end items-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;