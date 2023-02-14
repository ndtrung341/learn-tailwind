const toggleThemeBtn = document.querySelector('#toggle-theme-btn');
// Change the icons inside the button based on previous settings
function changeTheme() {
	if (
		localStorage.getItem('color-theme') === 'dark' ||
		(!('color-theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}
changeTheme();

toggleThemeBtn.addEventListener('click', function () {
	const theme = localStorage.getItem('color-theme');
	if (theme) {
		if (theme === 'dark') {
			localStorage.setItem('color-theme', 'light');
		} else {
			localStorage.setItem('color-theme', 'dark');
		}
	} else {
		if (document.documentElement.classList.contains('dark')) {
			localStorage.setItem('color-theme', 'light');
		} else {
			localStorage.setItem('color-theme', 'dark');
		}
	}
	changeTheme();
});
