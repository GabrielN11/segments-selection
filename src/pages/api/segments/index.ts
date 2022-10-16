import type { NextApiRequest, NextApiResponse } from 'next'
import segmentsJson from './segments.json'
import Segment from '../../../models/Segment'

type Error = {
    message: string
}

export default async function handler(
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