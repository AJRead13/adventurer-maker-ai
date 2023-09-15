import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedStories {
        storyId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
