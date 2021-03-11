import { Entity } from '#enterprise/domain/entity'
export class Standard extends Entity {
  id!: string
  name!: string
  rating?: number
  createdAt?: string
  updatedAt?: string

  constructor (obj: Partial<Standard>) {
    super()
    Object.assign(this,obj)
  }
}
