document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      var username = form.username.value;
      var password = form.password.value;
      const credentials = {
        email: username,
        password: password
    };
 
      console.log("Sending login request with:", { username, password});

      if (!username || !password ) {
        alert("Please fill in all fields.");
        return;
      }
  
      try {
     
        
        
       
        
        
        
       
        
        const serverUrl = 'http://localhost:3000/login';
        
        axios.post(serverUrl, credentials)
        .then(response => {
              window.location.href = '/dashboard'
        })
         .catch(error => {
            console.log(error);
            })
      
      } catch (error) {
        console.error('Login error:', error);
        alert('Server error. Please try again later.');
      }
    });
  });
  