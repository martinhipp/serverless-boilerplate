import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "serverless-boilerplate",
  useDotenv: true,
  provider: {
    name: "aws",
    stage: "dev",
    region: "ap-southeast-2",
    runtime: "nodejs16.x",
    httpApi: {
      cors: true,
    },
  },
  plugins: ["serverless-esbuild"],
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
    },
  },
  functions: {
    hello: {
      handler: "src/functions/hello.handler",
      events: [
        {
          httpApi: {
            path: "/hello",
            method: "get",
          },
        },
      ],
    },
  },
  package: {
    individually: true,
  },
  // resources: {
  //   Conditions: {
  //     IsDev: {
  //       "Fn::Equals": ["${sls:stage}", "dev"],
  //     },
  //   },
  //   Resources: {},
  // },
};

module.exports = serverlessConfiguration;
