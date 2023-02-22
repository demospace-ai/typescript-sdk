import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CreateSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SourceInput;
}

export class CreateSource200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: shared.Source;
}

export class CreateSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSource200ApplicationJSONObject?: CreateSource200ApplicationJSON;
}