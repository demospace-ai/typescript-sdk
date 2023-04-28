# linkToken

## Overview

Operations on link tokens

### Available Operations

* [createLinkToken](#createlinktoken) - Create a new link token

## createLinkToken

Create a new link token

### Example Usage

```typescript
import { Fabra } from "@fabra/sdk";
import { CreateLinkTokenResponse } from "@fabra/sdk/dist/sdk/models/operations";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.linkToken.createLinkToken({
  endCustomerId: "123",
}).then((res: CreateLinkTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
