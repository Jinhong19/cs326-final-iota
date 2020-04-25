$(document).ready(function () {
    console.log("ready!")
    readOrders()
    updateOrders()
})

const url = "http://localhost:8080/orders"

async function readOrders() {
    ;(async () => {
        const restaurantId = "res123"
        const newURL = url + "/?restaurantId=" + restaurantId
        console.log("read order: fetching " + newURL)
        const res = await fetch(newURL)
        const j = await res.json()
        console.log(j)
        renderOrders(j.orders)
    })()
}

function renderOrders(orders) {
    console.log("read order: rendering")
    console.log(orders)
    const container = $(".incoming-order-container")
    $.each(orders, function (i, order) {
        const div = $("<div>")
            .addClass("one-incoming-order card my-3 rounded shadow-sm")
            .appendTo(container)
        const ul = $("<ul>")
            .addClass("list-group list-group-flush")
            .appendTo(div)
        // add call number and button to first row
        const span = $("<span>")
            .addClass("order-number col-8")
            .append($("<strong>").text("Order: " + order.callNumber))
        const button = $("<button>")
            .prop("type", "button")
            .addClass("order-ready-button btn btn-primary col-3 col-lg-2")
            .text("Ready")
        const li1 = $("<li>")
            .addClass("list-group-item order-number-and-ready-button")
            .append(
                $("<div>")
                    .addClass("row align-items-center justify-content-around")
                    .append(span, button)
            )
            .appendTo(ul)
        // add food list
        $.each(order.content, function (i, food) {
            $("<li>").addClass("list-group-item").text(food.name).appendTo(ul)
        })
    })
}

// Update 
async function updateOrders() {
    ;(async () => {
        /*
        let counterName = document.getElementById("countername").value;
        let userName = document.getElementById("username").value;
        // NEW: we no longer add info to the URL (for GET) but instead put it in a JSON object.
	    const data = { 'name' : counterName }; // -- (1)
	    const newURL = url + "/users/" + userName + "/update"; // used to be ?name=" + counterName; -- (2)
	    console.log("counterUpdate: fetching " + newURL);
	    const resp = await postData(newURL, data); // used to be fetch -- (3)
	    const j = await resp.json();
	    if (j['result'] !== 'error') {
	        document.getElementById("output").innerHTML = "301: <b>" + userName + ", " + counterName + " value = " + j['value'] + "</b>";
	    } else {
	        document.getElementById("output").innerHTML = "300: " + userName + ", " + counterName + " not found.";
        }
        */

        const restaurantId = "res123"
        const newURL = url + "/?restaurantId=" + restaurantId
        // console.log("update order: fetching " + newURL)
        console.log("orderUpdate: fetching " + newURL);
        const data = { 'restaurantID' : restaurantId };
        const resp = await postData(newURL, data); // used to be fetch
        const j = await resp.json();
        
        if (j['result'] !== 'error') {
	        // document.getElementById("output").innerHTML = "301: <b>" + userName + ", " + counterName + " value = " + j['value'] + "</b>";
            const container = $(".incoming-order-container")
            $("<h1>Order Result:</h1>").appendTo(container)
            $("<p>Success</p>").appendTo(container)
        } else {
            // document.getElementById("output").innerHTML = "300: " + userName + ", " + counterName + " not found.";
            const container = $(".incoming-order-container")
            $("<h1>Order Result:</h1>").appendTo(container)
            $("<p>Error</p>").appendTo(container)
        }

        /*
        const container = $(".incoming-order-container")
        $("<h1>Order Result:</h1>").appendTo(container)
        $("<p>Success</p>").appendTo(container)
        */

    })();
    
}

// NEW: helper method for posting data
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