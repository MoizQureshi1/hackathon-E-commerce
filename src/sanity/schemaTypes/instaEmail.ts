import { Rule } from "@sanity/types";

export default {
    name: 'instaEmail',
    title: 'Insta Email',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Insta Email',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().email(),
      },
    ],
  };