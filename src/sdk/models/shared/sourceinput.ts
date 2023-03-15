import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BigQueryConfig } from "./bigqueryconfig";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { MongoDbConfig } from "./mongodbconfig";
import { RedshiftConfig } from "./redshiftconfig";
import { SnowflakeConfig } from "./snowflakeconfig";
import { Expose, Type } from "class-transformer";

export class SourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bigquery_config" })
  @Type(() => BigQueryConfig)
  bigqueryConfig?: BigQueryConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "connection_type" })
  connectionType: ConnectionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_customer_id" })
  endCustomerId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "mongodb_config" })
  @Type(() => MongoDbConfig)
  mongodbConfig?: MongoDbConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "redshift_config" })
  @Type(() => RedshiftConfig)
  redshiftConfig?: RedshiftConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "snowflake_config" })
  @Type(() => SnowflakeConfig)
  snowflakeConfig?: SnowflakeConfig;
}
