# destination

## Overview

Operations on destinations

### Available Operations

* [createDestination](#createdestination) - Create a new destination
* [getDestinations](#getdestinations) - Get all destinations

## createDestination

Create a new destination

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { CreateDestinationResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { ConnectionTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.destination.createDestination({
  bigqueryConfig: {
    credentials: "Paste JSON from GCP",
    location: "us-west1",
  },
  connectionType: ConnectionTypeEnum.Webhook,
  displayName: "BigQuery",
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
}).then((res: CreateDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDestinations

Get all destinations

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetDestinationsResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { ConnectionTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.destination.getDestinations().then((res: GetDestinationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
