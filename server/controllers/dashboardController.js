const Note = require('../models/Notes');
const mongoose = require('mongoose');


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
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/dashboard'
    
    });
}