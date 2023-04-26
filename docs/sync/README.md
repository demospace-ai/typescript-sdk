# sync

## Overview

Operations on syncs

### Available Operations

* [createSync](#createsync) - Create a new sync
* [getSyncs](#getsyncs) - Get all syncs

## createSync

Create a new sync

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { CreateSyncResponse, SyncInput } from "@fabra/sdk/dist/sdk/models/operations";
import { FrequencyUnitsEnum } from "@fabra/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: shared.SyncInput = {
  cursorField: "updated_at",
  customJoin: "select * from events join additional_properties on events.id = additional_properties.event_id;",
  destinationId: 2,
  displayName: "Event Sync",
  fieldMappings: [
    {
      destinationFieldName: "event",
      sourceFieldName: "event_name",
    },
    {
      destinationFieldName: "event",
      sourceFieldName: "event_name",
    },
  ],
  frequency: 30,
  frequencyUnits: FrequencyUnitsEnum.Hours,
  namespace: "end_customer_bigquery_dataset",
  objectId: 3,
  primaryKey: "event_id",
  sourceId: 1,
  tableName: "end_customer_events",
};

sdk.sync.createSync(req).then((res: CreateSyncResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncs

Get all syncs

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { GetSyncsResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { FrequencyUnitsEnum } from "@fabra/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sync.getSyncs().then((res: GetSyncsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
