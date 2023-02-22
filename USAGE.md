<!-- Start SDK Example Usage -->
```typescript
import { Fabra, withSecurity} from "@fabra/sdk";
import { GetNamespacesRequest, GetNamespacesResponse } from "@fabra/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Fabra(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetNamespacesRequest = {
  queryParams: {
    connectionID: 548814,
  },
};

sdk.connection.getNamespaces(req).then((res: GetNamespacesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->