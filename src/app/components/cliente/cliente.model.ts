export interface ClienteNewDTO {
    id?: number
    nome: string
    email: string
    cpfOuCnpj: string  
    tipo: number       
    senha: string      
    logradouro: string 
    numero: string     
    complemento: string
    bairro: string     
    cep: string       
    telefone1: string  
    telefone2: string  
    telefone3: string  
    cidadeId: number 
}