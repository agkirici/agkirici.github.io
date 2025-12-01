import { defineField, defineType } from 'sanity';

export const code = defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Python', value: 'python' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Bash', value: 'bash' },
          { title: 'Shell', value: 'shell' },
          { title: 'JSON', value: 'json' },
          { title: 'YAML', value: 'yaml' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SQL', value: 'sql' },
          { title: 'R', value: 'r' },
          { title: 'Text', value: 'text' },
        ],
      },
      initialValue: 'text',
    }),
    defineField({
      name: 'filename',
      title: 'Filename (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
    },
    prepare({ language, filename }) {
      return {
        title: filename || 'Code Block',
        subtitle: language || 'text',
      };
    },
  },
});

