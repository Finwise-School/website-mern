// contact form validation

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;

    // Name validation
    var name = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }

    // Email validation
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    if (!email.checkValidity()) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Subject validation
    var subject = document.getElementById('subject');
    var subjectError = document.getElementById('subjectError');
    if (subject.value.trim() === '') {
      subjectError.style.display = 'block';
      isValid = false;
    } else {
      subjectError.style.display = 'none';
    }

    // Message validation
    var message = document.getElementById('message');
    var messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
      messageError.style.display = 'block';
      isValid = false;
    } else {
      messageError.style.display = 'none';
    }

    if (!isValid) {
      event.preventDefault();
    }
  });