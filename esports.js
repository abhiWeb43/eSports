function validateForm() {
  var name = document.forms["contact-form"]["name"].value;
  var email = document.forms["contact-form"]["email"].value;
  var message = document.forms["contact-form"]["message"].value;
  var isValid = true;

  if (name == "") {
    document.getElementById("name-error").innerHTML = "Name is required";
    isValid = false;
  } else {
    document.getElementById("name-error").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("email-error").innerHTML = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("email-error").innerHTML = "Invalid email address";
    isValid = false;
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (message == "") {
    document.getElementById("message-error").innerHTML = "Message is required";
    isValid = false;
  } else {
    document.getElementById("message-error").innerHTML = "";
  }

  return isValid;
}

/*animation*/    
const images = document.querySelectorAll('.hd2');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `HT6 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

images.forEach(image => {
    observer.observe(image)
})

/*animation 2*/
const imag = document.querySelectorAll('#xb>img');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `xbox 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

imag.forEach(image => {
    observer.observe(image)
})