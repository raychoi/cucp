Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var user = Meteor.user();
    var post = {
      title: $(e.target).find('[name=title]').val(),
      address: $(e.target).find('[name=address]').val(),
      owner: user.username,
      deleted: 'F',
      createUser: user._id,
      editUser: user._id,
      createDateTime: new Date(),
      editDateTime: new Date()
    };
    /*
    Meteor.call('postInsert', post, function(error, result) {
      // Show error and return
      if (error)
        return alert(error.reason);

      // Show has same title record, and return to the record page
      if (result.postExists)
        alert('This record title has already been posted');

      Router.go('postPage', {_id: result._id});
    });
    */
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
