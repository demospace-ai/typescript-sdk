import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CreateSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SyncInput;
}

export class CreateSync200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sync" })
  sync?: shared.Sync;
}

export class CreateSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSync200ApplicationJSONObject?: CreateSync200ApplicationJSON;
}