/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignUpNumberMutationVariables = {
    number: string;
};
export type SignUpNumberMutationResponse = {
    readonly startSignup: {
        readonly token: {
            readonly id: string;
            readonly authCode: string;
            readonly mobile: string;
            readonly whenMobileValidated: unknown | null;
        };
    } | null;
};
export type SignUpNumberMutation = {
    readonly response: SignUpNumberMutationResponse;
    readonly variables: SignUpNumberMutationVariables;
};



/*
mutation SignUpNumberMutation(
  $number: String!
) {
  startSignup(mobile: $number) {
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
    "name": "number"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "mobile",
        "variableName": "number"
      }
    ],
    "concreteType": "StartSignup",
    "kind": "LinkedField",
    "name": "startSignup",
    "plural": false,
    "selections": [
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
    "name": "SignUpNumberMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpNumberMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e0792b14da917723b34e05b2feb06906",
    "id": null,
    "metadata": {},
    "name": "SignUpNumberMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpNumberMutation(\n  $number: String!\n) {\n  startSignup(mobile: $number) {\n    token {\n      id\n      authCode\n      mobile\n      whenMobileValidated\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ce783de0e2c83bab2a5cb8a17475dc46';
export default node;
