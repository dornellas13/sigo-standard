import 'reflect-metadata'
import { APIGatewayEvent, Handler } from 'aws-lambda'
import Container from 'typedi'
import builder from '#framework/common/builder'
import { StandardController } from '#adapter/controllers/standardController'

export const handler: Handler = async (event: APIGatewayEvent) => {
  const standardController = Container.get(StandardController)
  return builder.response(await standardController.getAll())
}
