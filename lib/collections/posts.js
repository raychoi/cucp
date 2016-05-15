Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    // Allow login user to add record
    return !! userId;
  }
});
