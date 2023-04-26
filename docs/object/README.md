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
import { CreateObjectResponse, ObjectInput } from "@fabra/sdk/dist/sdk/models/operations";
import { FieldTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: shared.ObjectInput = {
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
};

sdk.object.createObject(req).then((res: CreateObjectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.object.getObjects().then((res: GetObjectsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
