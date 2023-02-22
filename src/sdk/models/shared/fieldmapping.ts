import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class FieldMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_field_name" })
  destinationFieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=source_field_name" })
  sourceFieldName?: string;
}