const EditAdmin = require('../models/editAdmin'); //EditAdmin Section

//order matters must be above :id
const admin_edit_webpage_get = (req, res) => {
  res.render('blogs/edit-webpage', {title: 'Edit a web page'});
}
const admin_edit_webpage_get2 = (req, res) => {
  EditAdmin.find()
  .then((result) => {
    res.render('website portfolio/wholesome-food-services', {title: 'Wholesome Food Services', editAdmins: result});
  })
  .catch(err => {
    res.status(404).render('404', {title: 'Blog not found'});
    //console.log(err);
  })
}

const editAdmin_create_post = (req, res) => {
    const editAdmin = new EditAdmin(req.body);
    editAdmin.save()
      .then((result) => {
        res.redirect('website portfolio/wholesome-food-services');
      })
      .catch((err) => {
        console.log(err);
      });
}

module.exports = {
  admin_edit_webpage_get,
  editAdmin_create_post,
  admin_edit_webpage_get2
}
