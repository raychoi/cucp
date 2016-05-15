Template.postsList.helpers({
    posts: function() {
      return Posts.find({}, {sort: {createDateTime: -1}});
    }
});
