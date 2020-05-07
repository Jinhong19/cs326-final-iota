const urlPlaceOrder = "http://localhost:8080/orders"

async function placeOrderCreate() {
    ;(async () => {
        const restaurantId = "res1"
        const userId = "user2"
        const content = [
            {
                name: "Cookie",
                quantity: 3,
            },
            { name: "Apple",  quantity: 1 },
        ]
        // pass in restaurantId, userId, and content
        let data = {
            restaurantId: restaurantId,
            userId: userId,
            content: content,
        }
        const newURL = urlPlaceOrder + "/create"
        console.log("create order: fetching " + newURL)
        const resp = await postDataPlaceOrder(newURL, data)
        const j = await resp.json()
        console.log(j)
    })()
}

async function postDataPlaceOrder(url, data) {
    const resp = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
    })
    return resp
}
