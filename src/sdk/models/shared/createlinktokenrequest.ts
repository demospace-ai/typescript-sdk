import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateLinkTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_customer_id" })
  endCustomerId: string;
}
