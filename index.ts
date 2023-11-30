import * as auth from "./src/auth.interface";
import * as agentStatus from "./src/agentStatus.interface"
import * as customer from "./src/customers.interface";

export default { ...auth , ...agentStatus, ...customer }
