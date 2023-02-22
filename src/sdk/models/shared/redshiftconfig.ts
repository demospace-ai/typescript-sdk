import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class RedshiftConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}