import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class FieldMapping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "destination_field_name" })
  destinationFieldName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source_field_name" })
  sourceFieldName?: string;
}