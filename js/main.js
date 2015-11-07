/*jslint browser:true, nomen:true*/
/*global requirejs*/
requirejs(['pouchdb-5.1.0.min'], function (Pouchdb) {
    'use strict';
    var db = new Pouchdb('utils'),
        remoteDb = new Pouchdb('https://zone.mekton.nl/utils'),
        elements = {},
        sync, // handler for the replication
        startSync;

    // **********************************************************
    // ** Get elements
    // **********************************************************
    elements.generate = document.querySelector();

    // **********************************************************
    // ** Display Data
    // **********************************************************
    // Display Player information

    // **********************************************************
    // **  Database interaction
    // **********************************************************

    // **********************************************************
    // **  Database replication
    // **********************************************************
    // Synchronise (master-master replication)
    startSync = function () {
        sync = db.sync(remoteDb, {
            live: true,
            retry: true
        }).on('change', function (change) {
            console.log('change', {dt: new Date().toISOString(), change: change});
        }).on('paused', function (info) {
            console.log('paused', {dt: new Date().toISOString(), info: info});
        }).on('active', function (info) {
            console.log('active', {dt: new Date().toISOString(), info: info});
        }).on('error', function (err) {
            console.error('Error in Sync (retry is true)', err);
        }).on('completed', function (info) {
            console.log('Sync completed, was replication cancelled?', info);
        });
    };

    // **********************************************************
    // **  UI Events
    // **********************************************************
    // Generate pushed


    // **********************************************************
    // **  MAIN
    // **********************************************************
//    startSync();

});
