export {};
const url = "http://localhost:8080/restaurants";

async function placeOrderCreate(){
    async() =>{
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
          };
        const newURL = url + "/?restaurantId=" + restaurantId
        console.log("create order: fetching " + newURL);
        const resp = await postData(newURL, data)
        const j = await resp.json();
        console.log(j);
        document.getElementById("output").innerHTML = "Customer " + userId + "'s order has been placed to " + restaurantId + " with item(s) " + foodItem + " with the amount of " + quantity;
        
    }
}

        let output = document.getElementById('output');
        output.innerHTML = 'restaurantId';


async function postData(url, data) {
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
    });
    return resp;
}