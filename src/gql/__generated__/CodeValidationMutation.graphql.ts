/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CodeValidationMutationVariables = {
    authCode: string;
    tokenId: string;
};
export type CodeValidationMutationResponse = {
    readonly validateMobile: {
        readonly success: boolean;
        readonly token: {
            readonly id: string;
            readonly authCode: string;
            readonly mobile: string;
            readonly whenMobileValidated: unknown | null;
        };
    } | null;
};
export type CodeValidationMutation = {
    readonly response: CodeValidationMutationResponse;
    readonly variables: CodeValidationMutationVariables;
};



/*
mutation CodeValidationMutation(
  $authCode: String!
  $tokenId: ID!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "authCode"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tokenId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "authCode",
        "variableName": "authCode"
      },
      {
        "kind": "Variable",
        "name": "tokenId",
        "variableName": "tokenId"
      }
    ],
    "concreteType": "ValidateMobile",
    "kind": "LinkedField",
    "name": "validateMobile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthToken",
        "kind": "LinkedField",
        "name": "token",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "authCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mobile",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "whenMobileValidated",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CodeValidationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CodeValidationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cdb27769a53367694f511ea5dccea0ad",
    "id": null,
    "metadata": {},
    "name": "CodeValidationMutation",
    "operationKind": "mutation",
    "text": "mutation CodeValidationMutation(\n  $authCode: String!\n  $tokenId: ID!\n) {\n  validateMobile(authCode: $authCode, tokenId: $tokenId) {\n    success\n    token {\n      id\n      authCode\n      mobile\n      whenMobileValidated\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '420746d1617d57d789a96643ec375edc';
export default node;
