import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class MongoDbConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connection_options" })
  connectionOptions?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "host" })
  host: string;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;
}