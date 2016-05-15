Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      title: $(e.target).find('[name=title]').val(),
      address: $(e.target).find('[name=address]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // 向用户显示错误信息
        alert(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this record?")) {
      var currentPostId = this._id;

      var postProperties = {
        deleted: 'F'
      }
      Posts.update(currentPostId, {$set: postProperties}, function(error) {
        if (error) {
          // 向用户显示错误信息
          alert(error.reason);
        } else {
          //Router.go('postPage', {_id: currentPostId});
          Router.go('postsList');
        }
      });
      //Posts.remove(currentPostId);

    }
  }
});
