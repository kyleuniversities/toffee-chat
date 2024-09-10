export const graphqlQuery = async (query, variables = {}) => {
    return await new Promise(async (resolve, reject) => {
        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                variables
            })
        })
        const result = await response.json()
        if (result.errors) {
            reject(result.errors)
        }
        resolve(result.data)
    })
}