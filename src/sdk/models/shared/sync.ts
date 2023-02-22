import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldMapping } from "./fieldmapping";
import { FrequencyUnitsEnum } from "./frequencyunitsenum";


export class Sync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor_field" })
  cursorField?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_join" })
  customJoin?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_id" })
  destinationId?: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=field_mappings", elemType: FieldMapping })
  fieldMappings?: FieldMapping[];

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: number;

  @SpeakeasyMetadata({ data: "json, name=frequency_units" })
  frequencyUnits?: FrequencyUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=object_id" })
  objectId?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_key" })
  primaryKey?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName?: string;
}