declare const url = "http://localhost:8080/orders";
declare function readOrders(): Promise<void>;
declare function renderOrders(orders: any): void;
declare function updateOrders(): Promise<void>;
declare function postData(url: any, data: any): Promise<Response>;
