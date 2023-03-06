import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ObjectField } from "./objectfield";
import { Expose, Type } from "class-transformer";


export class ObjectT extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "customer_id_column" })
  customerIdColumn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "destination_id" })
  destinationId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ elemType: ObjectField })
  @Expose({ name: "object_fields" })
  @Type(() => ObjectField)
  objectFields?: ObjectField[];

  @SpeakeasyMetadata()
  @Expose({ name: "table_name" })
  tableName?: string;
}