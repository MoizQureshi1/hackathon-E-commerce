import { Rule } from "@sanity/types";

export default {
    name: 'contactForm',
    title: 'Contact Form',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(3).max(100),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().email(),
      },
      {
        name: 'subject',
        title: 'Subject',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
    ],
  };