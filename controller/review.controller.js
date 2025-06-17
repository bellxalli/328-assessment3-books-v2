import reviews from './../data/book-reviews.js';

//write middleware function to access reviews and return them as part of the response ...
export const getReviews = async (req, res) => {
    const reviews = await reviews.findAll();
    res.status(200).json(reviews);
}