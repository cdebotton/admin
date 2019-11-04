/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateUserByIdInput = {
    readonly clientMutationId?: string | null;
    readonly userPatch: UserPatch;
    readonly id: string;
};
export type UserPatch = {
    readonly id?: string | null;
    readonly username?: string | null;
    readonly createdAt?: Date | null;
    readonly updatedAt?: Date | null;
};
export type UpdateUserMutationVariables = {
    input: UpdateUserByIdInput;
};
export type UpdateUserMutationResponse = {
    readonly updateUserById: {
        readonly user: {
            readonly id: string;
            readonly username: string;
        } | null;
    } | null;
};
export type UpdateUserMutation = {
    readonly response: UpdateUserMutationResponse;
    readonly variables: UpdateUserMutationVariables;
};



/*
mutation UpdateUserMutation(
  $input: UpdateUserByIdInput!
) {
  updateUserById(input: $input) {
    user {
      id
      username
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserByIdInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUserById",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateUserMutation",
    "id": null,
    "text": "mutation UpdateUserMutation(\n  $input: UpdateUserByIdInput!\n) {\n  updateUserById(input: $input) {\n    user {\n      id\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9bc56e141b07f852125052f8cea2e952';
export default node;
