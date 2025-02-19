import { Rule } from "@sanity/types";

export default {
    name: 'footerEmail',
    title: 'Footer Email',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Footer Email',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().email(),
      },
    ],
  };