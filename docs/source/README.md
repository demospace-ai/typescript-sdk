# source

## Overview

Operations on sources

### Available Operations

* [createSource](#createsource) - Create a new source
* [getSources](#getsources) - Get all sources

## createSource

Create a new source

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { CreateSourceResponse, SourceInput } from "@fabra/sdk/dist/sdk/models/operations";
import { ConnectionTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: shared.SourceInput = {
  bigqueryConfig: {
    credentials: "Paste JSON from GCP",
    location: "us-west1",
  },
  connectionType: ConnectionTypeEnum.Bigquery,
  displayName: "Frontend Events",
  endCustomerId: 123,
  mongodbConfig: {
    connectionOptions: "retryWrites=true&w=majority",
    host: "examplecluster.abc123.mongodb.net",
    password: "securePassword123",
    username: "jane_doe",
  },
  redshiftConfig: {
    databaseName: "your_database",
    host: "examplecluster.12345.us-west-1.redshift.amazonaws.com",
    password: "securePassword123",
    port: "5432",
    username: "jane_doe",
  },
  snowflakeConfig: {
    databaseName: "your_database",
    host: "abc123.us-east4.gcp.snowflakecomputing.com",
    password: "securePassword123",
    role: "your_role",
    username: "jane_doe",
    warehouseName: "your_warehouse",
  },
};

sdk.source.createSource(req).then((res: CreateSourceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSources

Get all sources

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetSourcesResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { ConnectionTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.source.getSources().then((res: GetSourcesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
