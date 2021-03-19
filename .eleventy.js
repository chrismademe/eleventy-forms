const _ = require('lodash');
const Form = require('./src/lib/classes/Form');

module.exports = (eleventyConfig, options = {}) => {

    // Bail if no forms are defined
    if ( ! _.has(options, 'forms') ) {
        // throw new Error('eleventy-forms-plugin requires at least 1 form to be configured.');
        // Setup default data
        options.forms = {
            contactForm: {
                name: 'Contact Form',
                fields: [
                    {
                        name: 'name',
                        label: 'Your Name'
                    }
                ]
            }
        }
    }

    const forms = options.forms;

    eleventyConfig.addShortcode('renderForm', (name) => {

        // Bail if the form doesn't exist
        if ( ! _.has(forms, name) ) {
            throw new Error(`No form was found with the name ${name}, check your eleventyForms.js config file.`);
        }

        return new Form(forms[name]).render();
    });
}