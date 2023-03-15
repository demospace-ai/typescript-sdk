import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SnowflakeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "database_name" })
  databaseName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "host" })
  host: string;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role: string;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;

  @SpeakeasyMetadata()
  @Expose({ name: "warehouse_name" })
  warehouseName: string;
}
