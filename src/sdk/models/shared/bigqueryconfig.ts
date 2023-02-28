import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class BigQueryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "credentials" })
  credentials?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location: string;
}