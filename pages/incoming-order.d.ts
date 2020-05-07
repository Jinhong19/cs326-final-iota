declare const url = "http://localhost:8080/orders";
declare function readOrders(): Promise<void>;
declare function renderOrders(orders: any): void;
declare function updateOrders(e: any): Promise<void>;
declare function postDataIncomingOrder(url: any, data: any): Promise<Response>;
