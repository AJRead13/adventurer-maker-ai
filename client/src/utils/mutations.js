import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_STORY = gql`
  mutation saveStory($storyData: StoryInput!) {
    saveStory(storyData: $storyData) {
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

export const REMOVE_STORY = gql`
  mutation removeStory($storyId: ID!) {
    removeStory(storyId: $storyId) {
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
