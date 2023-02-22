import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class BigQueryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;
}