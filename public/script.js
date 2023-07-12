document.addEventListener('DOMContentLoaded', () => {
    // Get the signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get the form fields
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Implement signup logic here
        // Example: Send a POST request to the signup API endpoint with the form data
        fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fullName, email, password })
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    }
  
    // Get the login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get the form fields
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Implement login logic here
        // Example: Send a POST request to the login API endpoint with the form data
        fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    }
  
    // Get the vaccination centers section
    const vaccinationCentersSection = document.getElementById('vaccination-centers-section');
    if (vaccinationCentersSection) {
      // Implement logic to fetch vaccination centers from the server
      // Example: Send a GET request to the vaccination centers API endpoint
      fetch('/vaccination-centers')
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          const vaccinationCentersList = document.getElementById('vaccination-centers-list');
          data.vaccinationCenters.forEach(center => {
            const listItem = document.createElement('li');
            listItem.textContent = `${center.name} - ${center.location}`;
            vaccinationCentersList.appendChild(listItem);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    // Get the apply slot form
    const applySlotForm = document.getElementById('apply-slot-form');
    if (applySlotForm) {
      applySlotForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get the form fields
        const centerName = document.getElementById('centerName').value;
        const slotDate = document.getElementById('slotDate').value;
        // Implement apply slot logic here
        // Example: Send a POST request to the apply slot API endpoint with the form data
        fetch('/apply-slot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ centerName, slotDate })
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    }
  
    // Get the logout button
    const logoutButton = document.getElementById('logoutBtn');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        // Implement logout logic here
        // Example: Send a POST request to the logout API endpoint
        fetch('/logout', {
          method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    }
  });
  