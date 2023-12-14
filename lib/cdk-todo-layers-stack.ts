import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Architecture, Code, LayerVersion, Runtime} from "aws-cdk-lib/aws-lambda";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTodoLayersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new LayerVersion(this, "CalculatorLayer", {
      layerVersionName: `CalculatorLayer`,
      compatibleRuntimes: [
          Runtime.NODEJS_18_X,
      ],
      code: Code.fromAsset(`./dist/layer`),
      compatibleArchitectures: [
          Architecture.X86_64,
      ]
    })
  }
}
