$(document).ready(function () {
    console.log("ready!")
    readOrders()
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
