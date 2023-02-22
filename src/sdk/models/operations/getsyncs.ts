import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetSyncs200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=syncs", elemType: shared.Sync })
  syncs?: shared.Sync[];
}

export class GetSyncsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyncs200ApplicationJSONObject?: GetSyncs200ApplicationJSON;
}