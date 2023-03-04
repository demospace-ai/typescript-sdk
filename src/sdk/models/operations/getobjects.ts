import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetObjects200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ObjectT })
  @Expose({ name: "objects" })
  @Type(() => shared.ObjectT)
  objects?: shared.ObjectT[];
}

export class GetObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getObjects200ApplicationJSONObject?: GetObjects200ApplicationJSON;
}