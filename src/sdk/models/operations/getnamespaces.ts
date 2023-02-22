import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetNamespacesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionID" })
  connectionID: number;
}

export class GetNamespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamespacesQueryParams;
}

export class GetNamespaces200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaces" })
  namespaces?: string[];
}

export class GetNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNamespaces200ApplicationJSONObject?: GetNamespaces200ApplicationJSON;
}