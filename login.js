const form = document.getElementById('login-form');

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const username = form.elements['username'].value;
			const password = form.elements['password'].value;

			// Code to handle backend data goes here
		});