import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class MongoDbConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_options" })
  connectionOptions?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}