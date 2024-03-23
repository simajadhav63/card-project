document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('user-form');
    const userCard = document.getElementById('user-card');
  
    // Load theme preference from localStorage or set default
    
  
    // Event listener for form submission
    userForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form input values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const email = document.getElementById('email').value;
      const country = document.getElementById('country').value;
      const state = document.getElementById('state').value;
      const city = document.getElementById('city').value;
  
      // Save user data to localStorage
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('email', email);
      localStorage.setItem('country', country);
      localStorage.setItem('state', state);
      localStorage.setItem('city', city);
  
      // Update user card with saved data
      userCard.innerHTML = `
        <h1>User Profile</h1>
        <div>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>City:</strong> ${city}</p>
        </div>
        <button id="editProfileBtn">Edit Profile</button>
      `;
  
      // Add event listener for edit profile button
      const editProfileBtn = document.getElementById('editProfileBtn');
      editProfileBtn.addEventListener('click', function() {
        userCard.innerHTML = userForm.outerHTML; // Display the form again
        const editThemeSelect = userCard.querySelector('#themeSelect');
        editThemeSelect.value = themeSelect.value; // Set theme select value
      });
    });
  
    // Load user data from localStorage on page load
    const savedFirstName = localStorage.getItem('firstName');
    const savedLastName = localStorage.getItem('lastName');
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    const savedEmail = localStorage.getItem('email');
    const savedCountry = localStorage.getItem('country');
    const savedState = localStorage.getItem('state');
    const savedCity = localStorage.getItem('city');
    if (savedFirstName && savedLastName && savedPhoneNumber && savedEmail && savedCountry && savedState && savedCity) {
      userCard.innerHTML = `
        <h1>User Profile</h1>
        <div>
          <p><strong>Name:</strong> ${savedFirstName} ${savedLastName}</p>
          <p><strong>Phone Number:</strong> ${savedPhoneNumber}</p>
          <p><strong>Email:</strong> ${savedEmail}</p>
          <p><strong>Country:</strong> ${savedCountry}</p>
          <p><strong>State:</strong> ${savedState}</p>
          <p><strong>City:</strong> ${savedCity}</p>
        </div>
        <button id="editProfileBtn">Edit Profile</button>
      `;
  
      // Add event listener for edit profile button
      const editProfileBtn = document.getElementById('editProfileBtn');
      editProfileBtn.addEventListener('click', function() {
        userCard.innerHTML = userForm.outerHTML; // Display the form again
        const editThemeSelect = userCard.querySelector('#themeSelect');
        editThemeSelect.value = themeSelect.value; // Set theme select value
      });
    }
  });
  