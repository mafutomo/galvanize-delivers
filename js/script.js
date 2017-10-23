$(document).ready(function() {
  console.log("ready!");

  var foodName = "";
  var foodCost = 0;
  var foodCostStr = "";
  var shoppingCart = {};
  var subTotal = 0;
  var total = 0;
  var tax = 4.4;

  function updateValues() {
    shoppingCart[foodName] = foodCost;
    subTotal += foodCost;
    console.log("foodName = ", foodName, "foodCost = ", foodCost);
    console.log(shoppingCart);
    console.log("subTotal = ", subTotal);
    total = subTotal + tax;
    console.log("total = ", total);
  }; //end of addMenuItem function

  function updateMenuText() {
    $("#shopping-list").append("<tr>" + "<td>" + foodName + "</td>" + "<td>" + "$" + foodCost.toFixed(2) + "</td>" + "</tr>");
    $("#subtotal").empty().text("$" + subTotal.toFixed(2));
    $("#total").empty().text("$" + total.toFixed(2));
  } //end of updateMenuText function


  $("#menu_one").click(function() {
    foodName = "Pegasus Poppers";
    foodCost = 10.50;

    updateValues();
    updateMenuText()
  });


  $("#menu_two").click(function() {
    foodName = "Chimera Chuck Steak";
    foodCost = 25.00;

    updateValues();
    updateMenuText()
  });


  $("#menu_three").click(function() {
    foodName = "Sea Serpent Soup";
    foodCost = 8.50;

    updateValues();
    updateMenuText()
  });

  $("#menu_four").click(function() {
    foodName = "Mermaid Mousse";
    foodCost = 8.00;

    updateValues();
    updateMenuText()
  });

  //FORM VALIDATION

  $("#phone").keyup(function() {
    $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'))
  });

  $("#checkout_button").click(function(event) {

    let $name = $("#name").val();
    let $phone = $("#phone").val().split("-").join("");
    let $streetAddress = $("#street-address").val();
    let $city = $("#city").val();
    let $state = $("#state").val();
    let $zip = $("#zip").val();

    console.log(parseInt($phone));
    console.log(isNaN(parseInt($phone)));

    if (total === 0) {
      Materialize.toast('Please add items to your cart!', 4000)

    } else if ($name === "") {

      Materialize.toast('Please fill out your name', 4000)

    } else if ($phone.length !== 10) {

      Materialize.toast('Please enter a valid phone number', 4000)

    } else if ($phone === "") {

      Materialize.toast('Please enter a phone number', 4000)

    } else if ($streetAddress === "" || $city === "" || $state === "" || $zip === "") {

      Materialize.toast('One or more of your address information is not complete', 4000)

    } else if ($zip.length !== 5) {

      Materialize.toast('Please enter a valid zipcode', 4000)

    } else {
      Materialize.toast('Order Received!', 4000);
      console.log("NOT zero!");
    }

  }); //end of submit click

}); //end of doc.ready

console.log("Hello!")
