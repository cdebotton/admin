/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type UserItem_user = {
    readonly id: string;
    readonly username: string;
    readonly " $refType": "UserItem_user";
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserItem_user",
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
    }
  ]
};
(node as any).hash = '086e8931404c293db01f039c6e52dacf';
export default node;
