# object

## Overview

Operations on objects

### Available Operations

* [createObject](#createobject) - Create a new object
* [getObjects](#getobjects) - Get all objects

## createObject

Create a new object

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { CreateObjectResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { FieldTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.object.createObject({
  destinationId: 2,
  displayName: "BigQuery",
  endCustomerIdField: "end_customer_id",
  namespace: "bigquery_dataset",
  objectFields: [
    {
      name: "event_name",
      type: FieldTypeEnum.Json,
    },
    {
      name: "event_name",
      type: FieldTypeEnum.Json,
    },
  ],
  tableName: "events",
}).then((res: CreateObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getObjects

Get all objects

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetObjectsResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { FieldTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.object.getObjects().then((res: GetObjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
