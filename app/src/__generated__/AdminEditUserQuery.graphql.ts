/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AdminEditUserQueryVariables = {
    id: string;
};
export type AdminEditUserQueryResponse = {
    readonly userById: {
        readonly " $fragmentRefs": FragmentRefs<"UserForm_user">;
    } | null;
};
export type AdminEditUserQuery = {
    readonly response: AdminEditUserQueryResponse;
    readonly variables: AdminEditUserQueryVariables;
};



/*
query AdminEditUserQuery(
  $id: UUID!
) {
  userById(id: $id) {
    ...UserForm_user
  }
}

fragment UserForm_user on User {
  id
  username
  createdAt
  updatedAt
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "UUID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AdminEditUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserForm_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AdminEditUserQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AdminEditUserQuery",
    "id": null,
    "text": "query AdminEditUserQuery(\n  $id: UUID!\n) {\n  userById(id: $id) {\n    ...UserForm_user\n  }\n}\n\nfragment UserForm_user on User {\n  id\n  username\n  createdAt\n  updatedAt\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '088c0c8214a942b6c5ab047d987fd34e';
export default node;
