// Background Music Control
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('.music-icon');
    
    // Set initial volume (50%)
    audio.volume = 0.5;
    
    // Music toggle functionality
    musicToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().then(() => {
                musicToggle.classList.add('playing');
                musicIcon.textContent = '🎵';
            }).catch(error => {
                console.log('Autoplay prevented:', error);
                // Show user interaction required message
                musicIcon.textContent = '🔇';
            });
        } else {
            audio.pause();
            musicToggle.classList.remove('playing');
            musicIcon.textContent = '🔇';
        }
    });
    
    // Handle autoplay policy
    audio.addEventListener('canplay', function() {
        // Try to play automatically
        audio.play().then(() => {
            musicToggle.classList.add('playing');
        }).catch(error => {
            console.log('Autoplay prevented:', error);
            musicIcon.textContent = '🔇';
        });
    });
    
    // Update icon when audio ends
    audio.addEventListener('ended', function() {
        musicToggle.classList.remove('playing');
        musicIcon.textContent = '🔇';
    });
});

// Form validation và xử lý
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('campRegistrationForm');
    const submitButton = document.getElementById('submitButton');
    const loading = document.getElementById('loading');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Validation functions
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10,11}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    function validateDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age >= 10 && age <= 16;
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate required fields
        const requiredFields = [
            'participantName', 'participantGender', 
            'participantBirthday', 'parentName', 'parentPhone', 
            'parentRelation', 'address'
        ];
        
        let isValid = true;
        let errorMessages = [];
        
        // Check required fields
        requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                isValid = false;
                errorMessages.push(`Vui lòng điền đầy đủ thông tin bắt buộc`);
            }
        });
        
        // Validate phone
        if (data.parentPhone && !validatePhone(data.parentPhone)) {
            isValid = false;
            errorMessages.push('Số điện thoại không hợp lệ (10-11 chữ số)');
        }
        
        // Validate birthday
        if (data.participantBirthday && !validateDate(data.participantBirthday)) {
            isValid = false;
            errorMessages.push('Ngày sinh không hợp lệ hoặc tuổi không phù hợp');
        }
        
        if (!isValid) {
            errorMessage.querySelector('p').textContent = errorMessages.join('. ');
            errorMessage.style.display = 'block';
            return;
        }
        
        // Show loading
        submitButton.disabled = true;
        loading.style.display = 'block';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Hide loading
            loading.style.display = 'none';
            submitButton.disabled = false;
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Log form data (in real app, send to server)
            console.log('Form submitted:', data);
            
        }, 2000);
    });
    
    // Real-time validation
    const phoneInput = document.getElementById('parentPhone');
    
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#e53e3e';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });
});

// Smooth scrolling for navigation links (if any exist)
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
