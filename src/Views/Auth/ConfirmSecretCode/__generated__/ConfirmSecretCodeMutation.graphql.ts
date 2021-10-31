/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ConfirmSecretCodeMutationVariables = {
    name: string;
    tokenId: string;
    pin: string;
};
export type ConfirmSecretCodeMutationResponse = {
    readonly completeSignup: {
        readonly session: {
            readonly id: string;
            readonly user: {
                readonly id: string;
                readonly fullName: string;
                readonly mobile: string;
                readonly wallet: {
                    readonly id: string;
                    readonly balance: number;
                } | null;
            };
        };
    } | null;
};
export type ConfirmSecretCodeMutation = {
    readonly response: ConfirmSecretCodeMutationResponse;
    readonly variables: ConfirmSecretCodeMutationVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pin"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tokenId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "pin",
        "variableName": "pin"
      },
      {
        "kind": "Variable",
        "name": "tokenId",
        "variableName": "tokenId"
      }
    ],
    "concreteType": "CompleteSignup",
    "kind": "LinkedField",
    "name": "completeSignup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Session",
        "kind": "LinkedField",
        "name": "session",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
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
                "concreteType": "Wallet",
                "kind": "LinkedField",
                "name": "wallet",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "balance",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfirmSecretCodeMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ConfirmSecretCodeMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "3b565b5cdce0bcefa6df599f8e370f74",
    "id": null,
    "metadata": {},
    "name": "ConfirmSecretCodeMutation",
    "operationKind": "mutation",
    "text": "mutation ConfirmSecretCodeMutation(\n  $name: String!\n  $tokenId: ID!\n  $pin: String!\n) {\n  completeSignup(name: $name, tokenId: $tokenId, pin: $pin) {\n    session {\n      id\n      user {\n        id\n        fullName\n        mobile\n        wallet {\n          id\n          balance\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'be2de3bc843dd9bf5d970c43f71d3c37';
export default node;
