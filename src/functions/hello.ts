import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
import { formatResponse } from "../utils/lambda";

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  const message = `Hello from ${
    process.env.AWS_REGION
  }, the time is ${new Date().toISOString()}`;

  return formatResponse(200, {
    message,
    event,
  });
}
