Template.navigation.helpers({
	'isHome': function () {
		if (Router.current().route.getName() == 'home') {
			return 'active';
		}
	},
	'isRegister': function () {
		if (Router.current().route.getName() == 'register') {
			return 'active';
		}
	},
	'isBooks': function () {
		if (Router.current().route.getName() == 'books') {
			return 'active';
		}
	},
	'isBikes': function () {
		if (Router.current().route.getName() == 'bikes') {
			return 'active';
		}
	},
	'isAbout': function () {
		if (Router.current().route.getName() == 'about') {
			return 'active';
		}
	},
	'isLogin': function () {
		if (Router.current().route.getName() == 'login') {
			return 'active';
		}
	}
});

Template.navigation.events({
	'click .logout': function (event) {
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	}
});