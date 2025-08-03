document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_d7och29'; 
    const templateID = 'template_yvfj2a9'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send message.');
        });
});


