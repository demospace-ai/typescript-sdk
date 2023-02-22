import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetObjects200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objects", elemType: shared.ObjectT })
  objects?: shared.ObjectT[];
}

export class GetObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjects200ApplicationJSONObject?: GetObjects200ApplicationJSON;
}