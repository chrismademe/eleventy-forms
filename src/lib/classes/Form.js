const _ = require('lodash');
const path = require('path');
const nunjucks = require('nunjucks');
const Field = require('./Field');

class Form {

    constructor(form) {
        this.form = form;
    }

    setup() {
        let attributes = {
            className: [ `eleventy-form`, ...this.form.className || [] ],
            action: this.form.action || `#`,
            method: this.form.method || `post`
        }

        return attributes;
    }

    render() {
        // Opening Markup
        let html = nunjucks.render(path.join(__dirname, '/../../templates/form-open.njk'), {
            form: this.form,
            attributes: this.setup()
        });

        _.each(this.form.fields, (field) => {
            let theField = new Field(field);
            html += theField.render();
        });

        // Closing Markup
        html += nunjucks.render(path.join(__dirname, '/../../templates/form-close.njk'), this.form);

        return html;
    }

}

module.exports = Form;