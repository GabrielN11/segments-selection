import Segment from "../models/Segment";

export default async function fetchData(searchParam: string): Promise<Segment[]>{
    try{
        const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '?search=' + searchParam)
        const segments: Segment[] = await data.json()
        return segments
    }catch(e){
        console.log(e)
        throw new Error()
    }
}