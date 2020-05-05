const place_order_url = "http://localhost:8080/orders";

async function placeOrderCreate(){
    ;(async() =>{
        //let resName = (<HTMLInputElement>document.getElementById("searchInput")).value;
        const restaurantId = "fvr123";
        const userId = "12345" 
        const foodItem= ["food1", "food2"];
        const quantity =["1", "2"]; 
        let data = {
            //restaurantId: "res123",
            'restaurantId' : restaurantId,
            'userId' : userId,
            'foodItem' : foodItem,
            'quantity' : quantity
        }
        const place_order_newURL = url + "/create"
        console.log("create order: fetching " + place_order_newURL);
        const resp = await postData(place_order_newURL, data)
        const j = await resp.json();
        console.log(j);
    })()
}


async function postData(place_order_url, data) {
    const resp = await fetch(place_order_url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
    });
    return resp;
}