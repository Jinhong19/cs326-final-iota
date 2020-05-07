var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
$(document).ready(function () {
    console.log("ready!");
    readOrders();
});
var url = "http://localhost:8080/orders";
function readOrders() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            ;
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var restaurantId, newURL, data, res, j;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            restaurantId = "res1";
                            newURL = url + "/read";
                            console.log("read order: fetching with " + newURL);
                            data = {
                                restaurantId: restaurantId,
                            };
                            return [4 /*yield*/, postDataIncomingOrder(newURL, data)];
                        case 1:
                            res = _a.sent();
                            return [4 /*yield*/, res.json()];
                        case 2:
                            j = _a.sent();
                            console.log(j);
                            renderOrders(j.orders);
                            return [2 /*return*/];
                    }
                });
            }); })();
            return [2 /*return*/];
        });
    });
}
// need order to be array of {orderId: ?, callNumber: ?, content: array}
function renderOrders(orders) {
    console.log("read order: rendering");
    console.log(orders);
    var container = $(".incoming-order-container");
    var orderContent = $(".incoming-order-content");
    if (orderContent.length) {
        // if there is already a list, clear it
        orderContent.empty();
    }
    else {
        orderContent = $("<div>")
            .addClass("incoming-order-content")
            .appendTo(container);
    }
    $.each(orders, function (i, order) {
        var div = $("<div>")
            .addClass("one-incoming-order card my-3 rounded shadow-sm")
            .appendTo(orderContent);
        var ul = $("<ul>")
            .addClass("list-group list-group-flush")
            .appendTo(div);
        // add call number and button to first row
        var span = $("<span>")
            .addClass("order-number col-8")
            .append($("<strong>").text("Order: " + order.callNumber));
        var button = $("<button>")
            .prop("type", "button")
            .addClass("order-ready-button btn btn-primary col-3 col-lg-2")
            .text("Ready")
            .click({ orderId: order.orderId }, updateOrders);
        var firstRowForAOrder = $("<li>")
            .addClass("list-group-item order-number-and-ready-button")
            .append($("<div>")
            .addClass("row align-items-center justify-content-around")
            .append(span, button))
            .appendTo(ul);
        // add food list after the first row
        $.each(order.content, function (i, food) {
            $("<li>").addClass("list-group-item").text(food.name).appendTo(ul);
        });
    });
}
// Update
function updateOrders(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            ;
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var orderId, newURL, data, res, j;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            orderId = e.data.orderId;
                            newURL = url + "/update";
                            console.log("update order: fetching " + newURL);
                            data = {
                                orderId: orderId,
                            };
                            return [4 /*yield*/, postDataIncomingOrder(newURL, data)];
                        case 1:
                            res = _a.sent();
                            return [4 /*yield*/, res.json()];
                        case 2:
                            j = _a.sent();
                            console.log(j);
                            readOrders();
                            return [2 /*return*/];
                    }
                });
            }); })();
            return [2 /*return*/];
        });
    });
}
// NEW: helper method for posting data
function postDataIncomingOrder(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: "POST",
                        mode: "cors",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        redirect: "follow",
                        body: JSON.stringify(data),
                    })];
                case 1:
                    resp = _a.sent();
                    return [2 /*return*/, resp];
            }
        });
    });
}
