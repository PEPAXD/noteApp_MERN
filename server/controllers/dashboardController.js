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

    try{
        const notes = await Note.find({});
        res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes,
            layout: '../views/layouts/dashboard'
        });

    } catch (err) {
        console.log(err);
    }

}