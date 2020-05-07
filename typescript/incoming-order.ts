$(document).ready(function () {
    console.log("ready!")
    readOrders()
})

const url = "http://localhost:8080/orders"

async function readOrders() {
    ;(async () => {
        const restaurantId = "res123"
        const newURL = url + "/read"
        console.log("read order: fetching with " + newURL)
        let data = {
            restaurantId: restaurantId,
        }
        const res = await postDataIncomingOrder(newURL, data)
        const j = await res.json()
        console.log(j)
        renderOrders(j.orders)
    })()
}

// need order to be array of {orderId: ?, callNumber: ?, content: array}
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
            .click({ orderId: order.orderId }, updateOrders)
        const firstRowForAOrder = $("<li>")
            .addClass("list-group-item order-number-and-ready-button")
            .append(
                $("<div>")
                    .addClass("row align-items-center justify-content-around")
                    .append(span, button)
            )
            .appendTo(ul)
        // add food list after the first row
        $.each(order.content, function (i, food) {
            $("<li>").addClass("list-group-item").text(food.name).appendTo(ul)
        })
    })
}

// Update
async function updateOrders(e) {
    ;(async () => {
        const orderId = "order" + e.data.orderId
        const newURL = url + "/update"
        console.log("update order: fetching " + newURL)
        let data = {
            orderId: orderId,
        }
        const res = await postDataIncomingOrder(newURL, data)
        const j = await res.json()
        console.log(j)
    })()
}

// NEW: helper method for posting data
async function postDataIncomingOrder(url, data) {
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
