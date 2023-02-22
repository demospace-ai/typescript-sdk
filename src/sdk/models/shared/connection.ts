import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";


export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_type" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}