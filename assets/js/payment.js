function selectMethod(type) {
    let formArea = document.getElementById("form-area");
    formArea.style.display = "block";

    if (type === "card") {
        formArea.innerHTML = `
            <h3>Card Payment</h3>
            <input type="text" placeholder="Card Number">
            <input type="text" placeholder="Card Holder Name">
            <input type="month" placeholder="Expiry Date">
            <input type="password" placeholder="CVV">
            <button class="btn" onclick="paymentSuccess()">Pay Now</button>
        `;
    }else if (type === "bkash") {
        formArea.innerHTML = `
            <h3>bKash Payment</h3>
            <input type="text" placeholder="Enter bKash Number">
            <button class="btn" onclick="paymentSuccess()">Confirm Payment</button>
        `;
    }
    else if (type === "nagad") {
        formArea.innerHTML = `
            <h3>Nagad Payment</h3>
            <input type="text" placeholder="Enter Nagad Number">
            <button class="btn" onclick="paymentSuccess()">Confirm Payment</button>
        `;
    }
}




function paymentSuccess() {
    alert("Payment successful! (No API Used)");
    window.location.href = "success.html";
}