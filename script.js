// Form validation và xử lý
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('campRegistrationForm');
    const submitButton = document.getElementById('submitButton');
    const loading = document.getElementById('loading');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Validation functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10,11}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // function validateAge(age) {
    //     return age >= 10 && age <= 16;
    // }

    // function validateDate(dateString) {
    //     const date = new Date(dateString);
    //     const today = new Date();
    //     const age = today.getFullYear() - date.getFullYear();
    //     return age >= 10 && age <= 16;
    // }

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
            'participantName', 'participantAge', 'participantGender', 
            'participantBirthday', 'parentName', 'parentPhone', 
            'parentEmail', 'parentRelation', 'address'
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
        
        // Validate email
        if (data.parentEmail && !validateEmail(data.parentEmail)) {
            isValid = false;
            errorMessages.push('Email không hợp lệ');
        }
        
        // Validate phone
        if (data.parentPhone && !validatePhone(data.parentPhone)) {
            isValid = false;
            errorMessages.push('Số điện thoại không hợp lệ (10-11 chữ số)');
        }
        
        // Validate age
        // if (data.participantAge && !validateAge(parseInt(data.participantAge))) {
        //     isValid = false;
        //     errorMessages.push('Tuổi phải từ 10 đến 16');
        // }
        
        // Validate birthday
        // if (data.participantBirthday && !validateDate(data.participantBirthday)) {
        //     isValid = false;
        //     errorMessages.push('Ngày sinh không hợp lệ hoặc tuổi không phù hợp');
        // }
        
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
    const emailInput = document.getElementById('parentEmail');
    const phoneInput = document.getElementById('parentPhone');
    const ageInput = document.getElementById('participantAge');
    
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#e53e3e';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });
    
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#e53e3e';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });
    
    ageInput.addEventListener('blur', function() {
        if (this.value && !validateAge(parseInt(this.value))) {
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

