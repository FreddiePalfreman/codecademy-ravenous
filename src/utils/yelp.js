const apiKey = "hI2Evuv7iUDa-mW5BpIKPUBQ6_yRrZvKQCPtLPiAztgq3XxZ6hwwzVr9Udw1CQQYugpkaBHk02CKDzTs9QSdS5L_1KeBNGyDTnOQ3Awr5EIdBPYAIoSmM46-uj_nZXYx"

const getBusinesses = async (term, location, sortBy) => {
    const urlParams = `location=${location}&term=${term}&sort_by=${sortBy}&limit=10`
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const response = await fetch(corsProxy+'https://api.yelp.com/v3/businesses/search?'+urlParams, {headers: {"Authorization": `Bearer ${apiKey}`}})
    const jsonResponse = await response.json()
    // put the businesses into an array
    if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
            return {
                id: business.id,
                image: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipcode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                review_count: business.review_count
            }
        })
    }
}

export default getBusinesses