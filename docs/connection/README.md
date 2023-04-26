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
import { GetNamespacesRequest, GetNamespacesResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetNamespacesRequest = {
  connectionID: 592845,
};

sdk.connection.getNamespaces(req).then((res: GetNamespacesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSchema

Get schema for table

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetSchemaRequest, GetSchemaResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { FieldTypeEnum } from "@fabra/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetSchemaRequest = {
  connectionID: 715190,
  namespace: "quibusdam",
  tableName: "unde",
};

sdk.connection.getSchema(req).then((res: GetSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getTables

Get all tables

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetTablesRequest, GetTablesResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetTablesRequest = {
  connectionID: 857946,
  namespace: "corrupti",
};

sdk.connection.getTables(req).then((res: GetTablesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
