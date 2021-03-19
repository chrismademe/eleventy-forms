const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const Form = require('./src/lib/classes/Form');
const sampleConfig = require('./src/lib/sampleConfig');

module.exports = (eleventyConfig, options = {}) => {

    // Bail if no forms are defined
    if ( ! _.has(options, 'forms') ) {
        console.warn('❗ eleventy-forms-plugin requires at least 1 form to be configured. Using sample config instead.');
        // Setup default data
        options.forms = {
            contactForm: sampleConfig
        }
    }

    const forms = options.forms;

    /**
     * Render Form
     * 
     * Renders the HTML markup for a form
     */
    eleventyConfig.addShortcode('renderForm', (name) => {

        // Bail if the form doesn't exist
        if ( ! _.has(forms, name) ) {
            throw new Error(`No form was found with the name ${name}, check your eleventyForms.js config file.`);
        }

        return new Form(forms[name]).render();
    });

    /**
     * Eleventy Forms CSS
     * 
     * Provides optional CSS for forms
     */
    eleventyConfig.addShortcode('eleventyFormsCSS', () => {
        let filePath = path.join(__dirname, '/src/css/eleventy-forms.css');
        return fs.readFileSync(filePath, 'utf8', (err, data) => {
            return data;
        });
    });
}