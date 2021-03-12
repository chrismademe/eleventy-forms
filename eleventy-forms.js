const forms = require('./lib/loadConfig')();
const _ = require('lodash');
const generateFormMarkup = require('./lib/generateFormMarkup');

// console.log( generateFormMarkup() );

_.forEach( forms, (form, formName) => {
    form.name = formName;
    let markup = generateFormMarkup(form);
} );