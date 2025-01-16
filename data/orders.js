export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  // console.log('addOder1');
  orders.unshift(order);
  saveToStorage(); 
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}