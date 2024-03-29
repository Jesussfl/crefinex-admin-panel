import { gql } from "graphql-request";

export const queryExercisesByLesson = gql`
  query ($id: ID!, $start: Int, $limit: Int) {
    exercisesByLesson(id: $id, start: $start, limit: $limit) {
      exercises {
        id
        attributes {
          type
          order
          content
          createdAt
          updatedAt
        }
      }
      pagination {
        total
      }
      lesson {
        description
        order
        section {
          data {
            id
            attributes {
              description
            }
          }
        }
        world {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
`;
