<!-- Start SDK Example Usage -->
```typescript
import { Fabra } from "@fabra/sdk";
import { GetNamespacesResponse } from "@fabra/sdk/dist/sdk/models/operations";

const sdk = new Fabra({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.connection.getNamespaces({
  connectionID: 548814,
}).then((res: GetNamespacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->