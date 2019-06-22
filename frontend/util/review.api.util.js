export const fetchReviews = (spotId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/spots/${spotId}/reviews`,
        })
    )
}

export const fetchReview = (id, spotId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/spots/${spotId}/reviews/${id}`
        })
    )
}

export const createReview = (review, spotId) => {
    return (
        $.ajax({
            method: 'POST',
            url: `api/spots/${spotId}/reviews`,
            data: {review}
        })
    )
}

export const updateReview = (review, spotId) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/spots/${spotId}/reviews/${review.id}`,
            data: {review}
        })
    )
}

export const deleteReview = (id, spotId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/spots/${spotId}/reviews/${id}`
        })
    )
}