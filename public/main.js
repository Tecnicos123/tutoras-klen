// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission handler with WhatsApp integration
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Get service name in Spanish
    const servicios = {
        'tutorias': 'Tutorías Académicas',
        'trabajos': 'Realización de Trabajos Escolares',
        'impresion': 'Impresión y Copias',
        'soporte': 'Soporte Técnico'
    };
    
    const servicioNombre = servicios[servicio] || 'No especificado';
    
    // Create WhatsApp message
    let whatsappMessage = `¡Hola! Me interesa contactar con EduSupport 📚\n\n`;
    whatsappMessage += `👤 *Nombre:* ${nombre}\n`;
    whatsappMessage += `📧 *Email:* ${email}\n`;
    if (telefono) whatsappMessage += `📞 *Teléfono:* ${telefono}\n`;
    whatsappMessage += `🔧 *Servicio de interés:* ${servicioNombre}\n\n`;
    if (mensaje) whatsappMessage += `💬 *Mensaje:*\n${mensaje}\n\n`;
    whatsappMessage += `¡Espero su respuesta! 😊`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Your WhatsApp number (replace with your actual number)
    // Format: country code + number (without + sign)
    // Example: for Panama +507 6000-0000, use: 50760000000
    const whatsappNumber = '50767091190'; // Replace with your actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show confirmation message
    alert('¡Gracias por tu interés! Se abrirá WhatsApp con tu mensaje pre-formateado. Solo presiona enviar para contactarnos.');
    
    // Reset form
    this.reset();
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});