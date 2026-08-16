
export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
}

export interface Order {
    id?: string;
    customerName: string;
    customerEmail: string;
    shippingAddress: string;
    totalAmount: number;
    items: OrderItem[];
}
