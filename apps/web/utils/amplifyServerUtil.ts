import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { awsexports } from "../../../awsexports";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: awsexports,
});
