/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AuthenticateInput = {
    readonly clientMutationId?: string | null;
    readonly email: string;
    readonly password: string;
};
export type LoginMutationVariables = {
    input: AuthenticateInput;
};
export type LoginMutationResponse = {
    readonly authenticate: {
        readonly jwtToken: string | null;
    } | null;
};
export type LoginMutation = {
    readonly response: LoginMutationResponse;
    readonly variables: LoginMutationVariables;
};



/*
mutation LoginMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwtToken
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
        "kind": "ScalarField",
        "alias": null,
        "name": "jwtToken",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwtToken\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '88cc0e7f445957ed909a8b859c1d7718';
export default node;
