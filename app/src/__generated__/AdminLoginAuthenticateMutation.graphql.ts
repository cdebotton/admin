/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AuthenticateInput = {
    readonly clientMutationId?: string | null;
    readonly email: string;
    readonly password: string;
};
export type AdminLoginAuthenticateMutationVariables = {
    input: AuthenticateInput;
};
export type AdminLoginAuthenticateMutationResponse = {
    readonly authenticate: {
        readonly jwtToken: {
            readonly role: string | null;
            readonly userId: string | null;
        } | null;
    } | null;
};
export type AdminLoginAuthenticateMutation = {
    readonly response: AdminLoginAuthenticateMutationResponse;
    readonly variables: AdminLoginAuthenticateMutationVariables;
};



/*
mutation AdminLoginAuthenticateMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwtToken {
      role
      userId
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthenticateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authenticate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthenticatePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "jwtToken",
        "storageKey": null,
        "args": null,
        "concreteType": "JwtToken",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "role",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "userId",
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
    "name": "AdminLoginAuthenticateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AdminLoginAuthenticateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AdminLoginAuthenticateMutation",
    "id": null,
    "text": "mutation AdminLoginAuthenticateMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwtToken {\n      role\n      userId\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8d8ad82716a62e371fe872e7ce1e39c6';
export default node;
