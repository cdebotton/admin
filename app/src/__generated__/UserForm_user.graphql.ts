/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type UserForm_user = {
    readonly id: string;
    readonly username: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly " $refType": "UserForm_user";
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserForm_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = 'ebc37a51603a5aeeaa6764363d320ed7';
export default node;
