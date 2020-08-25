const completeOrder = (orderId) => {
  $.ajax({
    url: '/orders/complete',
    method: 'PUT',
    data: { orderId },
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));
};

$(document).ready(() => {
  $('.pickup-time').on('click', (event) => {
    const orderId = event.target.className.split(' ')[1].slice(9);

    completeOrder(orderId);
  });
});