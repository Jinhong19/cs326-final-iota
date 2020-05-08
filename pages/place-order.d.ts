declare const urlPlaceOrder = "http://localhost:8080/orders";
declare const urlReadMenu = "http://localhost:8080/restaurants";
declare function readRestaurantMenu(): Promise<void>;
declare function renderMenu(menu: any): void;
declare function placeOrderCreate(): Promise<void>;
declare function postDataPlaceOrder(url: any, data: any): Promise<Response>;
