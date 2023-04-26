<!-- Start SDK Example Usage -->
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
  connectionID: 548814,
};

sdk.connection.getNamespaces(req).then((res: GetNamespacesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->