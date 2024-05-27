
export interface ApiResponse {
  map(arg0: (item: { name: string; }) => string): string[];
  "greetings": string;
  // 'Seu nome é': string;
  // 'Sua mensagem é': string;
  "name": string
  "names": string[]
  "resultado": number
  "add": string
}