import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { Expose } from "class-transformer";


export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connection_type" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;
}