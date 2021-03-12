const _ = require('lodash');
const nunjucks = require('nunjucks');
const FieldSetup = require('./classFieldSetup');

/**
 * Given a config object, this will generate some HTML for a form
 */
module.exports = (form) => {
    const setup = new FieldSetup;
    const field = setup.text(form.fields[2]);
    const html = nunjucks.render('./templates/textarea.njk', field);
    console.log(field)
    console.log(html)
}