document.addEventListener('DOMContentLoaded', function() {
    const orderInfo = document.getElementById('order-info'); // Container to display order information
    const studentInfo = document.getElementById("student-info"); // Container to display student information
    const nameInput = document.getElementById('name'); // Input field for name
    const emailInput = document.getElementById('email'); // Input field for email

   //  Pizza class
    function Pizza(name, phone, email, address, pizzaSize, crust, toppings, sauce, deliveryTime) {
         // Constructor function to create Pizza objects
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.pizzaSize = pizzaSize;
        this.crust = crust;
        this.toppings = toppings;
        this.sauce = sauce;
        this.deliveryTime = deliveryTime;

       
        this.displayOrderDetails = function() {  // Method to display pizza order details
            const pizzaDescription = `Your Pizza Order: ${this.name} ordered a ${this.pizzaSize} pizza with ${this.crust} crust, topped with ${this.toppings.join(', ')} and ${this.sauce} sauce. Delivery address: ${this.address}. Contact: ${this.phone}, ${this.email}. Expected delivery time: ${this.deliveryTime}.`;

            orderInfo.textContent = pizzaDescription;
        };
    }

 // Add event listener to the form submission
    const pizzaForm = document.getElementById('pizza-form');
    pizzaForm.addEventListener('submit', function(event) {
        event.preventDefault();

      
        const name = nameInput.value.trim();
        if (!validateName(name)) { // Validate name using the validateName function
            alert("Please enter a valid name (only alphabets).");
            return;
        }

       
        const email = emailInput.value.trim();
        if (!validateEmail(email)) { // Validate email using the validateEmail function
            alert("Please enter a valid email address.");
            return;
        }

          // Validate crust type
        const crust = document.querySelector('input[name="crust"]:checked');// Get the selected crust type
        if (!crust) {
            alert("Please select a crust type.");
            return;
        }

           // Validate pizza sauce
        const sauce = document.querySelector('input[name="sauce"]:checked');
        if (!sauce) {
            alert("Please select a pizza sauce.");
            return;
        }

      // Validate toppings selection
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);
        if (toppings.length < 3) {
            alert("Please select at least 3 toppings.");
            return;
        }

         // Validate delivery time
        const deliveryTime = document.getElementById('delivery-time').value;
        if (!deliveryTime) {
            alert("Please select a delivery time.");
            return;
        }

        
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const pizzaSize = document.getElementById('pizza-size').value;

       
        const pizzaOrder = new Pizza(name, phone, email, address, pizzaSize, crust.value, toppings, sauce.value, deliveryTime);

    
        pizzaOrder.displayOrderDetails();  // Call the displayOrderDetails method of the Pizza object to display order details
    });

   
    function validateName(name) { // Function to validate name
        const regex = /^[a-zA-Z]+$/;
        return regex.test(name);
    }

   
    function validateEmail(email) {     // Function to validate email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Display my information
    const myName = "Dupinder Kaur";
    const studentId = "200553418";
    studentInfo.textContent = `Student name: ${myName}, Id: ${studentId}`;
});
