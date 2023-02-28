import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class GetTablesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionID" })
  connectionID: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespace" })
  namespace: string;
}

export class GetTablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTablesQueryParams;
}

export class GetTables200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "tables" })
  tables?: string[];
}

export class GetTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTables200ApplicationJSONObject?: GetTables200ApplicationJSON;
}