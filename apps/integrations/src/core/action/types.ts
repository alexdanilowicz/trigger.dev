import { CacheService } from "core/cache/types";
import { EndpointSpec } from "core/endpoint/types";
import { HTTPMethod, RequestData, RequestResponse } from "core/request/types";

export type InputSpec = {
  security?: EndpointSpec["security"];
  parameters?: EndpointSpec["parameters"];
  body?: NonNullable<EndpointSpec["request"]["body"]>["schema"];
};

export type OutputSpec = {
  responses: EndpointSpec["responses"];
};

export type Metadata = Record<string, any>;

export type DisplayProperties = {
  title: string;
};

export type Action = {
  name: string;
  description: string;
  path: string;
  method: HTTPMethod;
  spec: {
    input: InputSpec;
    output: OutputSpec;
  };
  action: (
    /** The data to be sent to the endpoint */
    data: RequestData,
    /** The cache service to use for caching */
    cache?: CacheService,
    /** Additional metadata that can be used to modify the request */
    metadata?: Metadata
  ) => Promise<RequestResponse>;
  displayProperties: (
    /** The data to be sent to the endpoint */
    data: RequestData
  ) => Promise<DisplayProperties>;
};
