class FieldSetup {
    text(context = {}) {
        const field = {
            attributes: {},
            html: {}
        }

        // HTML Setup
        field.html = {
            label: context.label || null,
            description: context.description || null,
            showLabel: context.showLabel || true,
            className: [
                'field__input',
                ...context.className || ''
            ]
        }

        // Field Setup
        field.attributes = {
            ...context.attributes,
            name: context.name,
            type: context.type || 'text',
        }

        return field;
    }
}

module.exports = FieldSetup;