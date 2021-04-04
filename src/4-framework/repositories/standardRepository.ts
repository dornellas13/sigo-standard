import { Service } from 'typedi'
import { IStandardRepository, IStandardRepositoryToken } from '#application/repositories/iStandardRepository'
import { Standard } from '#enterprise/domain/standard'
import { StandardModel } from '#framework/models/standardModel'

@Service({ id: IStandardRepositoryToken })
export class StandardRepository implements IStandardRepository {

  async getAll (): Promise<Standard[]> {
    return StandardModel.query(`pk`).eq('STANDARD').where('sk').beginsWith(`DETAILS`).ascending().exec()
  }

}
