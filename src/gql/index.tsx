import {graphql} from 'react-relay';

//Query
export const HomeQuery = graphql`
  query HomeQuery {
    me {
      id
      fullName
      mobile
      wallet {
        id
        balance
      }
    }
  }
`;

//Mutation
export const SignUpNumberMutation = graphql`
  mutation SignUpNumberMutation($number: String!) {
    startSignup(mobile: $number) {
      token {
        id
        authCode
        mobile
        whenMobileValidated
      }
    }
  }
`;

export const ConfirmSecretCodeMutation = graphql`
  mutation ConfirmSecretCodeMutation(
    $name: String!
    $tokenId: ID!
    $pin: String!
  ) {
    completeSignup(name: $name, tokenId: $tokenId, pin: $pin) {
      session {
        id
        user {
          id
          fullName
          mobile
          wallet {
            id
            balance
          }
        }
      }
    }
  }
`;

export const CodeValidationMutation = graphql`
  mutation CodeValidationMutation($authCode: String!, $tokenId: ID!) {
    validateMobile(authCode: $authCode, tokenId: $tokenId) {
      success
      token {
        id
        authCode
        mobile
        whenMobileValidated
      }
    }
  }
`;
