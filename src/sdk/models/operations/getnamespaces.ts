import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetNamespacesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionID" })
  connectionID: number;
}

export class GetNamespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamespacesQueryParams;
}

export class GetNamespaces200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "namespaces" })
  namespaces?: string[];
}

export class GetNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getNamespaces200ApplicationJSONObject?: GetNamespaces200ApplicationJSON;
}