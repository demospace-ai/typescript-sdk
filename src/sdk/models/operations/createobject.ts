import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CreateObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ObjectInput;
}

export class CreateObject200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: shared.ObjectT;
}

export class CreateObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createObject200ApplicationJSONObject?: CreateObject200ApplicationJSON;
}