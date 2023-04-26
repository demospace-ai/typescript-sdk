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
import { CreateLinkTokenRequest, CreateLinkTokenResponse } from "@fabra/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CreateLinkTokenRequest = {
  endCustomerId: "123",
};

sdk.linkToken.createLinkToken(req).then((res: CreateLinkTokenResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
