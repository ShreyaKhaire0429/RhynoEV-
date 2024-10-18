document.getElementById('contactButton').addEventListener('click', function() {
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});