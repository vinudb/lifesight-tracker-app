export const addNewTracker = async (tracker) =>{
    const response = await fetch(`https://fake-restful-api-vinay.herokuapp.com/data`, {
        method: 'POST',
        body: JSON.stringify(tracker),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    });
    if (response.status === 200 || response.status === 201) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to add new rules')
    }
}
