module.exports = {
    name: 'Contact Form',
    method: 'get',
    className: ['p-12', 'space-y-3'],
    fields: [
        {
            name: 'name',
            label: 'Your Name'
        },
        {
            name: 'options',
            label: 'Options',
            type: 'select',
            options: {
                tomorrow: 'Tomorrow',
                nextWeek: 'Next Week'
            }
        },
        {
            name: 'terms',
            label: 'By submitting this form, you agree to all the terms.',
            type: 'checkbox'
        },
        {
            name: 'submit',
            label: 'Send',
            className: ['px-6', 'py-2', 'bg-blue-700', 'text-blue-100', 'rounded']
        }
    ]
}