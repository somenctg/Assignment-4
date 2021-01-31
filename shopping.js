function handleTicketPrice(ticket, isIncrease) {
    const ticketQuantity = getInputValue(ticket);
    let ticketNewQuantity = ticketQuantity;
    if (isIncrease == true) {
        ticketNewQuantity = ticketQuantity + 1;
    }
    if (isIncrease == false && ticketQuantity > 0) {
        ticketNewQuantity = ticketQuantity - 1;
    }
    document.getElementById(ticket + '-quantity').value = ticketNewQuantity;
    let ticketTotal = 0;
    if (ticket == 'first-class') {
        ticketTotal = ticketNewQuantity * 150;
    }


    if (ticket == 'economy-class') {
        ticketTotal = ticketNewQuantity * 100;
    }

    document.getElementById('total-price').innerText = '$' + ticketTotal;
    calculateTotal();
}
function calculateTotal() {
    const firstClassQuantity = getInputValue('first-class');
    const economyClassQuantity = getInputValue('economy-class');

   const totalPrice = firstClassQuantity * 150 + economyClassQuantity *100;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('vat-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-quantity');
    const ticketQuantity = parseInt(ticketInput.value);
    return ticketQuantity;
}
    



// document.getElementById('first-class-increase').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-quantity');
//     const firstClassQuantity = parseInt(firstClassInput.value);
//     const firstClassNewQuantity = firstClassQuantity + 1;
//     firstClassInput.value = firstClassNewQuantity;
//     const firstClassTotal = firstClassNewQuantity * 150;
//     document.getElementById('total-price').innerText = firstClassTotal;
//  })
//  document.getElementById('first-class-decrease').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-quantity');
//     const firstClassQuantity = parseInt(firstClassInput.value);
//     const firstClassNewQuantity = firstClassQuantity - 1;
//     firstClassInput.value = firstClassNewQuantity;
//     const firstClassTotal = firstClassNewQuantity * 150;
//     document.getElementById('total-price').innerText = firstClassTotal;
//  })
//  document.getElementById('economy-class-increase').addEventListener('click', function(){
//     const economyClassInput = document.getElementById('economy-class-quantity');
//     const economyClassQuantity = parseInt(economyClassInput.value);
//     const economyClassNewQuantity = economyClassQuantity + 1;
//     economyClassInput.value = economyClassNewQuantity;
//     const economyClassTotal = economyClassNewQuantity * 100;
//     document.getElementById('total-price').innerText = economyClassTotal;
//  })
//  document.getElementById('economy-class-decrease').addEventListener('click', function(){
//     const economyClassInput = document.getElementById('economy-class-quantity');
//     const economyClassQuantity = parseInt(economyClassInput.value);
//     const economyClassNewQuantity = economyClassQuantity - 1;
//     economyClassInput.value = economyClassNewQuantity;
//     const economyClassTotal = economyClassNewQuantity * 100;
//     document.getElementById('total-price').innerText = economyClassTotal;
//  })


