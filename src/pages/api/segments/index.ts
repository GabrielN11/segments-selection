import type { NextApiRequest, NextApiResponse } from 'next'
import segmentsJson from './segments.json'
import Segment from '../../../models/Segment'

type Error = {
    message: string
}

/*
    handler recebe as chamadas do frontend, valida os métodos e parâmetros de busca e
    faz uma busca em um árquivo JSON contentendo os segmentos e suas ID's. A busca é feita
    por nome. São retornados no máximo 10 segmentos. Caso não haja parâmetro de busca, apenas os
    10 primeiros segmentos são retornados.
*/
/*export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Segment[] | Error>
) {
    if (req.method !== 'GET') return res.status(400).json({ message: 'Metodo não suportado' })

    const segments: Segment[] = segmentsJson

    if (!req.query.search || typeof req.query.search !== 'string') {
        const firstSegments = segments.filter((_, index) => index <= 9)
        return res.status(200).json(firstSegments)
    } else {
        const search = req.query.search.toLowerCase()
        let filteredSegments: Segment[] = []

        for (let segment of segments) {
            if (segment.name.toLowerCase().includes(search)){
                filteredSegments.push(segment)
                if(filteredSegments.length > 10) break
            }
        }
        
        return res.status(200).json(filteredSegments)
    }
}

*/