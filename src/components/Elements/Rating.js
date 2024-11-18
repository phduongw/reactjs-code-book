
const Rating = ({ rating }) => {
    let ratingArr = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArr[i] = true;
    }

    return (
        <>
            {ratingArr.map((item, index) => (
                item ? (<i className="text-lg bi bi-star-fill text-yellow-500 mr-1" key={index}></i>) :
                    (<i className="text-lg bi bi-star text-yellow-500 mr-1" key={index}></i>)
            ))}
        </>
    );
};

export default Rating;
