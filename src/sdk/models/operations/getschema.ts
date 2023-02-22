import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetSchemaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionID" })
  connectionID: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=table_name" })
  tableName: string;
}

export class GetSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchemaQueryParams;
}

export class GetSchema200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema", elemType: shared.ColumnSchema })
  schema?: shared.ColumnSchema[];
}

export class GetSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSchema200ApplicationJSONObject?: GetSchema200ApplicationJSON;
}