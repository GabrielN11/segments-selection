import Segment from "../models/Segment";

/*
    Esta função realiza a chamada assincrona a API. Recebe como parâmetro a query
    de busca e envia na URL da API. Retorna um JSON e o converte para Objeto da classe Segment.
    Caso haja um erro, exibe um erro no console e invoca outro erro para ser tratado nos componentes.
*/
export default async function fetchData(searchParam: string): Promise<Segment[]>{
    try{
        const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/segments?search=' + searchParam)
        const segments: Segment[] = await data.json()
        return segments
    }catch(e){
        console.log(e)
        throw new Error()
    }
}