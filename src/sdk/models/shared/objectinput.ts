import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ObjectField } from "./objectfield";


export class ObjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id_column" })
  customerIdColumn: string;

  @SpeakeasyMetadata({ data: "json, name=destination_id" })
  destinationId: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "json, name=object_fields", elemType: ObjectField })
  objectFields?: ObjectField[];

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName: string;
}