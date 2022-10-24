const EditAdmin = require('../models/editAdmin'); //EditAdmin Section


const admin_edit_webpage_get2 = (req, res) => { //remember to export this!
  res.render('website portfolio/wholesome-food-service', {title: 'Wholesome Food Services'});
}


//order matters must be above :id
const admin_edit_webpage_get = (req, res) => {
  res.render('blogs/edit-webpage', {title: 'Edit a web page'});
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
