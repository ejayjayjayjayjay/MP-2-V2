function sendMail() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // check if required fields are not empty
    if (fname === "" || lname === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    var params = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
    };
  
    const serviceID = "service_ddfwf5j";
    const templateID = "template_2aidr2n";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
      })
      .catch((err) => console.log(err));
  }