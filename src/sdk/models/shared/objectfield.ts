import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldTypeEnum } from "./fieldtypeenum";


export class ObjectField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FieldTypeEnum;
}