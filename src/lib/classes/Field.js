const path = require('path');
const nunjucks = require('nunjucks');

class Field {
    constructor(context = {}) {
        this.type = context.type || `text`;
        this.context = context;
    }

    setup() {
        let field = {
            attributes: {},
            html: {}
        }

        // HTML Setup
        field.html = {
            label: this.context.label || null,
            description: this.context.description || null,
            showLabel: this.context.showLabel || true,
            className: [
                'field__input',
                ...this.context.className || []
            ]
        }

        // Input Attributes Setup
        field.attributes = {
            ...this.context.attributes,
            name: this.context.name,
            type: this.context.type,
        }

        // Select
        if ( this.type === 'select' ) {
            field.options = this.context.options;
        }

        return field;
    }

    getTemplateName(type) {
        let base = path.join(__dirname, '/../../templates/{filename}.njk');

        // Input types that look the same as text
        let textTypes = [
            'password',
            'hidden',
            'tel',
            'email',
            'date',
            'datetime',
            'datetime-local',
            'url',
            'number',
            'month',
            'week',
            'time',
            'range',
            'color'
        ];

        if ( textTypes.includes(type) ) {
            type = `text`;
        }

        return base.replace('{filename}', type);
    }

    render() {
        let template = this.getTemplateName(this.type);
        return nunjucks.render( template, this.setup() );
    }
}

module.exports = Field;