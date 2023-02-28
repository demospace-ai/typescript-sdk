import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class SchemeAPIKeyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-API-Key" })
  apiKey: string;
}

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: SchemeAPIKeyAuth;
}