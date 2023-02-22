import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetSources200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: shared.Source[];
}

export class GetSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSources200ApplicationJSONObject?: GetSources200ApplicationJSON;
}