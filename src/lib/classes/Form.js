const _ = require('lodash');
const path = require('path');
const nunjucks = require('nunjucks');
const cleanHtml = require('clean-html');
const Field = require('./Field');

class Form {
	constructor(form) {
		this.form = form;
	}

	setup() {
		let attributes = {
			class: [`ef`, ...(this.form.class || [])],
			action: this.form.action || `#`,
			method: this.form.method || `post`,
		};

		return attributes;
	}

	render() {
		let htmlAttributes = this.setup();

		// Opening Markup
		let html = nunjucks.render(
			path.join(__dirname, '/../../templates/form-open.njk'),
			{
				form: this.form,
				attributes: { ...htmlAttributes, ...this.form.attributes },
			}
		);

		_.each(this.form.fields, (field) => {
			let theField = new Field(field);
			html += theField.render();
		});

		// Closing Markup
		html += nunjucks.render(
			path.join(__dirname, '/../../templates/form-close.njk'),
			this.form
		);

		return this.cleanHtml(html);
	}

	cleanHtml(input) {
		let cleanOutput;

		cleanHtml.clean(input, (output) => {
			cleanOutput = output;
		});

		return cleanOutput;
	}
}

module.exports = Form;
