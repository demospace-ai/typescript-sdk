import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetSyncs200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Sync })
  @Expose({ name: "syncs" })
  @Type(() => shared.Sync)
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