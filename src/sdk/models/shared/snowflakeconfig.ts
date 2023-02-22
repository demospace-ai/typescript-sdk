import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SnowflakeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;

  @SpeakeasyMetadata({ data: "json, name=warehouse_name" })
  warehouseName: string;
}