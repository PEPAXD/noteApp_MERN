const Note = require('../models/Notes');
const mongoose = require('mongoose');


/**
 * GET /
 * dashboard
 */

exports.dashboard = async (req, res) => {

    try {
        await Note.insertMany([
        {
            user: "60b9b8b9e1b0b30015a7e1a1",
            title: "Note 1",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl. Sed euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl.",
            createdAt: "2021-06-04T18:00:00.000+00:00"
        },
        {
            user: "60b9b8b9e1b0b30015a7e1a1",
            title: "Note 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl. Sed euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl.",
            createdAt: "2021-06-04T18:00:00.000+00:00"
        },
        {
            user: "60b9b8b9e1b0b30015a7e1a1",
            title: "Note 3",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl. Sed euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl.",
            createdAt: "2021-06-04T18:00:00.000+00:00"
        },
        {
            user: "60b9b8b9e1b0b30015a7e1a1",
            title: "Note 4",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl. Sed euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl.",
            createdAt: "2021-06-04T18:00:00.000+00:00",
        },
        {
            user: "60b9b8b9e1b0b30015a7e1a1",
            title: "Note 5",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl. Sed euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sit amet nisl.",
            createdAt: "2021-06-04T18:00:00.000+00:00",
        }
        ]);
          
    } catch (error) {
        console.log(error);
    }


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