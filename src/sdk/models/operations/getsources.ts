import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetSources200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Source })
  @Expose({ name: "sources" })
  @Type(() => shared.Source)
  sources?: shared.Source[];
}

export class GetSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getSources200ApplicationJSONObject?: GetSources200ApplicationJSON;
}