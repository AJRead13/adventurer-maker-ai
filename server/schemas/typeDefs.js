const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    storyCount: Int
    savedStories: [Story]
  }

  type Story {
    storyID: ID!
    createdAt: String
    storyLog: String!
    description: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input StoryInput {
    theme: String!
    description: String!
    storyLog: String!
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveStory(storyData: StoryInput!): User
    removeStory(storyId: ID!): User
  }
`;

module.exports = typeDefs;
