import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetDestinations200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: shared.Destination })
  destinations?: shared.Destination[];
}

export class GetDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDestinations200ApplicationJSONObject?: GetDestinations200ApplicationJSON;
}