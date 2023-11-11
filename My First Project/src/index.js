function albumPurchase() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  if (name.length > 0 && email.length > 0) {
    alert(
      `Wise choice, ${name}! We'll send the details of your purchase to your email. Until then, have ae Next Level day 😆`
    );
  } else {
    alert(
      `Hey! Looks like the detail you give is incomplete. Please try again 🙏`
    );
  }
}

let purchaseButton = document.querySelector("button");

purchaseButton.addEventListener("click", albumPurchase);
