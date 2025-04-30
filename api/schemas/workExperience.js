export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}