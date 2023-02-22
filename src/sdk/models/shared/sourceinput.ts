import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BigQueryConfig } from "./bigqueryconfig";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { MongoDbConfig } from "./mongodbconfig";
import { RedshiftConfig } from "./redshiftconfig";
import { SnowflakeConfig } from "./snowflakeconfig";


export class SourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigquery_config" })
  bigqueryConfig?: BigQueryConfig;

  @SpeakeasyMetadata({ data: "json, name=connection_type" })
  connectionType: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=end_customer_id" })
  endCustomerId: number;

  @SpeakeasyMetadata({ data: "json, name=mongodb_config" })
  mongodbConfig?: MongoDbConfig;

  @SpeakeasyMetadata({ data: "json, name=redshift_config" })
  redshiftConfig?: RedshiftConfig;

  @SpeakeasyMetadata({ data: "json, name=snowflake_config" })
  snowflakeConfig?: SnowflakeConfig;
}