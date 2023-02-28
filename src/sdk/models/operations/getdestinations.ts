import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetDestinations200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Destination })
  @Expose({ name: "destinations" })
  @Type(() => shared.Destination)
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