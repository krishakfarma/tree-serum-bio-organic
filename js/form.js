function submitForm() {
  // Get form elements
  const form = document.querySelector('.contact-form');
  const nameInput = form.querySelector('input[type="text"]');
  const phoneInput = form.querySelector('input[type="tel"]');
  const cropSelect = form.querySelector('select');
  const messageTextarea = form.querySelector('textarea');
  const submitBtn = form.querySelector('.form-submit');
  
  // Get form values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const crop = cropSelect.value;
  const message = messageTextarea.value.trim();
  
  // Validation
  let errors = [];
  
  if (!name) {
    errors.push('Please enter your name');
    nameInput.style.borderColor = '#e74c3c';
  } else {
    nameInput.style.borderColor = '#e0eee2';
  }
  
  if (!phone) {
    errors.push('Please enter your phone number');
    phoneInput.style.borderColor = '#e74c3c';
  } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
    errors.push('Please enter a valid 10-digit mobile number');
    phoneInput.style.borderColor = '#e74c3c';
  } else {
    phoneInput.style.borderColor = '#e0eee2';
  }
  
  if (!crop) {
    errors.push('Please select your crop type');
    cropSelect.style.borderColor = '#e74c3c';
  } else {
    cropSelect.style.borderColor = '#e0eee2';
  }
  
  if (!message) {
    errors.push('Please enter your message or query');
    messageTextarea.style.borderColor = '#e74c3c';
  } else {
    messageTextarea.style.borderColor = '#e0eee2';
  }
  
  // Show errors if any
  if (errors.length > 0) {
    showNotification('Please fill in all required fields correctly:\n\n' + errors.join('\n'), 'error');
    return;
  }
  
  // Show loading state
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '🔄 Sending...';
  submitBtn.disabled = true;
  
  // Prepare WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `***NEW FARMING ENQUIRY - Tree Serum***\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Crop Type:* ${crop}\n` +
    `*Message:* ${message}\n\n` +
    `*Enquiry Date:* ${new Date().toLocaleDateString('en-IN')}\n` +
    `*Time:* ${new Date().toLocaleTimeString('en-IN')}\n\n` +
    `*Please contact this farmer for their agricultural needs.*\n\n` +
    `---\n` +
    `Tree Serum Bio Organic International\n` +
    `ISO 9001:2015 Certified | 100% Bio Organic`
  );
  
  // WhatsApp number (remove spaces and special characters)
  const whatsappNumber = '918459006633'; // 84 59 006 633
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Also prepare email (as backup)
  const emailSubject = encodeURIComponent('Farming Enquiry - Tree Serum Bio Organic');
  const emailBody = encodeURIComponent(
    `New Farming Enquiry Details:\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Crop Type: ${crop}\n` +
    `Message: ${message}\n\n` +
    `Date: ${new Date().toLocaleDateString('en-IN')}\n` +
    `Time: ${new Date().toLocaleTimeString('en-IN')}`
  );
  const emailUrl = `mailto:Treeserum@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  
  // Try to open WhatsApp first
  setTimeout(() => {
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    
    // Check if WhatsApp opened successfully
    setTimeout(() => {
      if (whatsappWindow && !whatsappWindow.closed) {
        // WhatsApp opened successfully
        showNotification('✅ WhatsApp opened! Please send the message to complete your enquiry.\n\nIf WhatsApp doesn\'t work, you can also email us directly.', 'success');
        resetForm(form);
      } else {
        // WhatsApp blocked, try email
        window.open(emailUrl, '_blank');
        showNotification('� Email opened! Please send the email to complete your enquiry.\n\nYou can also call us directly at 84 59 006 633.', 'success');
        resetForm(form);
      }
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1000);
  }, 500);
}

function resetForm(form) {
  // Clear form fields
  form.querySelectorAll('input, textarea').forEach(field => {
    field.value = '';
    field.style.borderColor = '#e0eee2';
  });
  form.querySelector('select').value = '';
}

function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-message">${message.replace(/\n/g, '<br>')}</div>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto-remove after 8 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 8000);
}
