Posts = new Mongo.Collection('posts');
/*
Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId(), String);
    check(postAttributes, {
      //category:     String,
      //subCategory:  String,
      title: String,
      //startTime:    String,
      //endTime:      String,
      address: String
      //district:     String,
      //city:         String,
      //xBaidu:       String,
      //yBaidu:       String,
      //introduction: String,
      //photo:        String,
      //video:        String,
      //sound:        String,
    });

    // Check record duplicate title

    var postWithSameTitle = Posts.findOne({url: postAttributes.title});
    if (postWithSameTitle) {
      return {
        postExists: true,
        _id: postWithSameTitle._id
      }
    }


    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      owner: user.username,
      deleted: 'F',
      createUser: user._id,
      editUser: user._id,
      createDateTime: new Date(),
      editDateTime: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
*/

Posts.allow({
  // Allow login user to add record
  insert: function(userId, doc) { return !! userId; },
  update: function(userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    // 只能更改如下两个字段：
    return (_.without(fieldNames, 'title', 'address').length > 0);
  }
});
