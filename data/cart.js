export const cart = [];

export function addToCart(productId) {

  let matchingItem
      cart.forEach((cartItem) => {
         if(cartItem.productId === productId){
          matchingItem = cartItem;
         }
      });

      if(matchingItem){
         matchingItem.quontity += 1;
      } else {
        cart.push({
          productId: productId,
          quontity: 1
         });
        }
}
