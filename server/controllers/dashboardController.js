/**
 * GET /
 * dashboard
 */

exports.dashboard = async (req, res) => {

    const locals = {
        title: 'Dashboard - noteApp',
        description: 'ensolvers-challenge - by Mauro Pepa'
    }
        
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    
    });
}