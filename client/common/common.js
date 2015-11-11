Router.configure({
	layoutTemplate: 'navigation'
});

Router.route('/register', {
	name: 'register'
});
Router.route('/bikes', {
	name: 'bikes'
});
Router.route('/book', {
	template: 'book',
	name: 'books'
});
Router.route('/about', {
	name: 'about'
});
Router.route('/', {
	template: 'home',
	name: 'home'
});
Router.route('/login', {
	name: 'login'
});