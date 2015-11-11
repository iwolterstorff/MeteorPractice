Template.book.helpers({
    'list': function(){
      return booksList.find()
    },
    'selectedClass': function(){
      var itemId = this._id;
      var selectedItem = Session.get('selectedItem');
      if (itemId == selectedItem) {
        return "selected";
      }
    }
});

Template.book.events({
    'click .BookItem': function(){
      var itemId = this._id;
      Session.set('selectedItem', itemId);
    },
    'submit .book-add': function (event) {
    event.preventDefault();

    var text = event.target.text.value;

    var currentUser = Meteor.userId();

    if(currentUser) {
      var email = Meteor.user().emails[0].address;
    } else {
      var email = "none";
    }
    booksList.insert({
      name: text,
      createdBy: email
    });

    event.target.text.value = "";
  }
});