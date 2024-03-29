import { gql } from "graphql-request";

export const queryLessonsBySectionId = gql`
  query ($id: ID!, $start: Int, $limit: Int) {
    lessonsBySection(id: $id, start: $start, limit: $limit) {
      lessons {
        id
        attributes {
          description
          order
          type
          createdAt
          updatedAt
          status
          exercises {
            data {
              id
            }
          }
        }
      }
      pagination {
        total
      }
      section {
        description
        order
        world {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
`;
