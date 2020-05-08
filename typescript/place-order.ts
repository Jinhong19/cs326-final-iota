$(document).ready(function () {
    console.log("ready!")
    readRestaurantMenu()
})

const urlPlaceOrder = "http://localhost:8080/orders"
const urlReadMenu = "http://localhost:8080/restaurants"

async function readRestaurantMenu() {
    ;(async () => {
        const restaurantId = "res1"
        const newURL = urlReadMenu + "/read"
        console.log("read restaurants: fetching with " + newURL)
        let data = {
            restaurantId: restaurantId,
        }
        const res = await postDataPlaceOrder(newURL, data)
        const j = await res.json()
        console.log(j)
        // addRestaurantName(j.data.name)
        renderMenu(j.data.menu)
    })()
}

function renderMenu(menu) {
    const tb = $(".menu-items-table-body")
    $.each(menu, function (i, item) {
        const tdInput = $("<td>").append(
            $("<input>", {
                type: "number",
                class: "menu-item-quantity w-50 p-0 text-center",
                placeholder: "0",
            })
        )
        const tdName = $("<td>").addClass("menu-item-name").text(item.name)
        const tdPrice = $("<td>").text(item.price)
        const tr = $("<tr>").append(tdInput, tdName, tdPrice)
        tr.appendTo(tb)
    })
}

async function placeOrderCreate() {
    ;(async () => {
        const restaurantId = "res1"
        const userId = "user2"
        const content = []
        $(".menu-items-table-body > tr").each(function () {
            let quan = $(this)
                .children("td:first")
                .children(".menu-item-quantity")
                .val()
            let name = $(this).children(".menu-item-name").text()
            if (quan > 0) {
                console.log("add to order: " + quan + " " + name)
                let item = {
                    name: name,
                    quantity: quan
                }
                content.push(item)
            }
        })
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
        confirm(j.callNumber)
    })()
}

function confirm(callNumber){
    location.href = "http://localhost:8080/confirm-order.html"
    localStorage.setItem('callNumber', callNumber);
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
