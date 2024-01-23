/**
 * GET /
 * HomePage
 */

exports.homePage = async (req, res) => {

    const locals = {
        title: 'noteApp',
        description: 'ensolvers-challenge - by Mauro Pepa'
    }
        
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    
    });
}

/**
 * GET /
 * About
 */

exports.about = async (req, res) => {

    const locals = {
        title: 'About - noteApp',
        description: 'ensolvers-challenge - by Mauro Pepa'
    }
        
    res.render('about', locals);
}