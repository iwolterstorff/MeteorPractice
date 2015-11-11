Template.bikes.helpers({
	'list': function () {
		return bikesList.find()
	},
    'selectedClass': function(){
      var itemId = this._id;
      var selectedItem = Session.get('selectedItem');
      if (itemId == selectedItem) {
        return "selected";
      }
    }
});

Template.bikes.events({
	'click .BikeItem': function () {
		var itemId = this._id;
    	Session.set('selectedItem', itemId);
	},
	'submit .bike-add': function (event) {
    	event.preventDefault();

    	var text = event.target.text.value;

    	bikesList.insert({
      		name: text
    	});

    	event.target.text.value = "";
  	}
});