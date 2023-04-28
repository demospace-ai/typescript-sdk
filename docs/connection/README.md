# connection

## Overview

Operations on connections

### Available Operations

* [getNamespaces](#getnamespaces) - Get all namespaces
* [getSchema](#getschema) - Get schema for table
* [getTables](#gettables) - Get all tables

## getNamespaces

Get all namespaces

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetNamespacesResponse } from "@fabra/sdk/dist/sdk/models/operations";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.connection.getNamespaces({
  connectionID: 592845,
}).then((res: GetNamespacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSchema

Get schema for table

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetSchemaResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { FieldTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.connection.getSchema({
  connectionID: 715190,
  namespace: "quibusdam",
  tableName: "unde",
}).then((res: GetSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTables

Get all tables

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetTablesResponse } from "@fabra/sdk/dist/sdk/models/operations";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.connection.getTables({
  connectionID: 857946,
  namespace: "corrupti",
}).then((res: GetTablesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
