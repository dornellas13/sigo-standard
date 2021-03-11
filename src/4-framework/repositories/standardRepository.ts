import { Service } from 'typedi'
import { IStandardRepository, IStandardRepositoryToken } from '#application/repositories/iStandardRepository'
import { Standard } from '#enterprise/domain/standard'

@Service({ id: IStandardRepositoryToken })
export class StandardRepository implements IStandardRepository {

  getAll (): Standard[] {
    return [{ id: 'NR1', name: 'DISPOSIÇÕES GERAIS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR2', name: 'INSPEÇÃO PRÉVIA (REVOGADA)',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR3', name: 'EMBARGO OU INTERDIÇÃO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR4', name: 'SERVIÇOS ESPECIALIZADOS EM ENGENHARIA DE SEGURANÇA E EM MEDICINA DO TRABALHO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR5', name: 'COMISSÃO INTERNA DE PREVENÇÃO DE ACIDENTES',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR6', name: 'EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL EPI',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR7', name: 'PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR8', name: 'EDIFICAÇÕES',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR9', name: 'PROGRAMA DE PREVENÇÃO DE RISCOS AMBIENTAIS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR10', name: 'SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR11', name: 'TRANSPORTE, MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR12', name: 'SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR13', name: 'CALDEIRAS, VASOS DE PRESSÃO E TUBULAÇÕES E TANQUES METÁLICOS DE ARMAZENAMENTO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR14', name: 'FORNOS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR15', name: 'ATIVIDADES E OPERAÇÕES INSALUBRES',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR16', name: 'ATIVIDADES E OPERAÇÕES PERIGOSAS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR17', name: 'ERGONOMIA',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR18', name: 'CONDIÇÕES E MEIO AMBIENTE DE TRABALHO NA INDÚSTRIA DA CONSTRUÇÃO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR19', name: 'EXPLOSIVOS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR20', name: 'SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR21', name: 'TRABALHOS A CÉU ABERTO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR22', name: 'SEGURANÇA E SAÚDE OCUPACIONAL NA MINERAÇÃO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR23', name: 'PROTEÇÃO CONTRA INCÊNDIOS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR24', name: 'CONDIÇÕES SANITÁRIAS E DE CONFORTO NOS LOCAIS DE TRABALHO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR25', name: 'RESÍDUOS INDUSTRIAIS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR26', name: 'SINALIZAÇÃO DE SEGURANÇA' },
    { id: 'NR27', name: 'REGISTRO PROFISSIONAL DO TÉCNICO DE SEGURANÇA DO TRABALHO (REVOGADA)',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR28', name: 'FISCALIZAÇÃO E PENALIDADES',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR29', name: 'NORMA REGULAMENTADORA DE SEGURANÇA E SAÚDE NO TRABALHO PORTUÁRIO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR30', name: 'SEGURANÇA E SAÚDE NO TRABALHO AQUAVIÁRIO',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR31', name: 'SEGURANÇA E SAÚDE NO TRABALHO NA AGRICULTURA, PECUÁRIA SILVICULTURA, EXPLORAÇÃO FLORESTAL E AQUICULTURA',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR32', name: 'SEGURANÇA E SAÚDE NO TRABALHO EM SERVIÇOS DE SAÚDE',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR33', name: 'SEGURANÇA E SAÚDE NOS TRABALHOS EM ESPAÇOS CONFINADOS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR34', name: 'CONDIÇÕES E MEIO AMBIENTE DE TRABALHO NA INDÚSTRIA DA CONSTRUÇÃO, REPARAÇÃO E DESMONTE NAVAL',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR35', name: 'TRABALHO EM ALTURA',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR36', name: 'SEGURANÇA E SAÚDE NO TRABALHO EM EMPRESAS DE ABATE E PROCESSAMENTO DE CARNES E DERIVADOS',createdAt: new Date().toISOString(), updatedAt: undefined },
    { id: 'NR37', name: 'SEGURANÇA E SAÚDE EM PLATAFORMAS DE PETRÓLEO',createdAt: new Date().toISOString(), updatedAt: undefined }]
  }

}
