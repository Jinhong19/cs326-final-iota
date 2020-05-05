declare const urlPlaceOrder = "http://localhost:8080/orders";
declare function placeOrderCreate(): Promise<void>;
declare function postDataPlaceOrder(url: any, data: any): Promise<Response>;
