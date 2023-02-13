// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "https://cdn.skypack.dev/@xata.io/client?dts";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "https://cdn.skypack.dev/@xata.io/client?dts";

import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";


const tables = [
  { name: "invoice", columns: [{ name: "customer", type: "string" }] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Invoice = InferredTypes["invoice"];
export type InvoiceRecord = Invoice & XataRecord;

export type DatabaseSchema = {
  invoice: InvoiceRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Mustafa-Hanif-s-workspace-d4pmcv.eu-west-1.xata.sh/db/deno-test",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({
    apiKey: config().XATA_API_KEY,
  });
  return instance;
};
