/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AdminUsersQueryVariables = {};
export type AdminUsersQueryResponse = {
    readonly allUsers: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string | null;
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"UserItem_user">;
            } | null;
        }>;
    } | null;
};
export type AdminUsersQuery = {
    readonly response: AdminUsersQueryResponse;
    readonly variables: AdminUsersQueryVariables;
};



/*
query AdminUsersQuery {
  allUsers(first: 25) {
    edges {
      cursor
      node {
        ...UserItem_user
      }
    }
  }
}

fragment UserItem_user on User {
  id
  username
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 25
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AdminUsersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allUsers",
        "storageKey": "allUsers(first:25)",
        "args": (v0/*: any*/),
        "concreteType": "UsersConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UsersEdge",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "UserItem_user",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AdminUsersQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allUsers",
        "storageKey": "allUsers(first:25)",
        "args": (v0/*: any*/),
        "concreteType": "UsersConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UsersEdge",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AdminUsersQuery",
    "id": null,
    "text": "query AdminUsersQuery {\n  allUsers(first: 25) {\n    edges {\n      cursor\n      node {\n        ...UserItem_user\n      }\n    }\n  }\n}\n\nfragment UserItem_user on User {\n  id\n  username\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '984e976e71abe28b4a520d22ba6edce5';
export default node;
