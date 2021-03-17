const _ = require('lodash');
const forms = require('./lib/loadConfig')();
const Form = require('./lib/classes/Form');

module.exports = (eleventyConfig) => {
    eleventyConfig.addShortcode('renderForm', (name) => {

        // Bail if the form doesn't exist
        if ( ! _.has(forms, name) ) {
            throw new Error(`No form was found with the name ${name}, check your eleventyForms.js config file.`);
        }

        let theForm = new Form(forms[name]);
        return theForm.render();
    });
}