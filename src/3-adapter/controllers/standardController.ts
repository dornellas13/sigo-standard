import { Service } from 'typedi/decorators/Service'
import { Inject } from 'typedi'
import { OutputBase } from '#adapter/outputBase'
import { GetAllStandardUseCase } from '#application/useCases/standard/getAllUseCase'
import { GetAllStandardOutput } from '#adapter/serializers/standard/getAllOutput'

@Service()
export class StandardController {

  @Inject() private readonly getAllStandardUseCase!: GetAllStandardUseCase

  async getAll (): Promise<OutputBase<GetAllStandardOutput[]>> {
    try {
      const standards = await this.getAllStandardUseCase.run()
      console.info('[I] STANDARDS DATA', standards)
      return new OutputBase({
        data: standards.map(standard => new GetAllStandardOutput(standard))
      })
    } catch (error) {
      console.error(`[E] GET ALL STANDARDS`, error)
      return new OutputBase({
        success: false,
        errors: error
      })
    }

  }

}
