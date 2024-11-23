import FeedbackCard from "./FeedbackCard";

// eslint-disable-next-line react/prop-types
const Feedback = ({ feedbackData }) => {
    // console.log(feedbackData);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                // eslint-disable-next-line react/prop-types
                feedbackData.map(feedback => <FeedbackCard key={feedback.reviewId} feedback={feedback}></FeedbackCard>)
            }
        </div>
    );
};

export default Feedback;