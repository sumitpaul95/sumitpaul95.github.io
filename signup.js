const form = document.getElementById('signin-form');

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const name = form.elements['name'].value;
			const email = form.elements['email'].value;
			const password = form.elements['password'].value;

			// Send input details to email
			const subject = `New Sign In - HRF Fitness`;
			const body = `Name: ${name}\nEmail: ${email}\nPassword: ${password}`;
			const mailto = `mailto:sumitpaul.sp@gmail.com?subject=${subject}&body=${body}`;
			window.location.href = mailto;
		});