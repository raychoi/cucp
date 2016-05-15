Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      category:     $(e.target).find('[name=category]').val(),
      subCategory:  $(e.target).find('[name=subCategory]').val(),
      title:        $(e.target).find('[name=title]').val(),
      startTime:    $(e.target).find('[name=startTime]').val(),
      endTime:      $(e.target).find('[name=endTime]').val(),
      address:      $(e.target).find('[name=address]').val(),
      district:     $(e.target).find('[name=district]').val(),
      city:         $(e.target).find('[name=city]').val(),
      xBaidu:       $(e.target).find('[name=xBaidu]').val(),
      yBaidu:       $(e.target).find('[name=yBaidu]').val(),
      introduction: $(e.target).find('[name=introduction]').val(),
      photo:        $(e.target).find('[name=photo]').val(),
      video:        $(e.target).find('[name=video]').val(),
      sound:        $(e.target).find('[name=sound]').val(),
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
