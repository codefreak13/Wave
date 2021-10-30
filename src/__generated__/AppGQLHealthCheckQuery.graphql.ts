/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppGQLHealthCheckQueryVariables = {};
export type AppGQLHealthCheckQueryResponse = {
    readonly now: unknown;
};
export type AppGQLHealthCheckQuery = {
    readonly response: AppGQLHealthCheckQueryResponse;
    readonly variables: AppGQLHealthCheckQueryVariables;
};



/*
query AppGQLHealthCheckQuery {
  now
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "now",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppGQLHealthCheckQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppGQLHealthCheckQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c6f13e4822b533b0095533f7c6cca3d8",
    "id": null,
    "metadata": {},
    "name": "AppGQLHealthCheckQuery",
    "operationKind": "query",
    "text": "query AppGQLHealthCheckQuery {\n  now\n}\n"
  }
};
})();
(node as any).hash = 'bcf9dd19be366ed1e913a7c29afb36b6';
export default node;
