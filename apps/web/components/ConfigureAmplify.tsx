"use client";
import { awsexports } from "../../../awsexports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsexports, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
