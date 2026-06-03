import { NINJA_TOKEN } from '../config/env'; // або твій шлях до константи токена
import { NinjaFact } from "../types/ninja.types"




export async function getRandomFact(): Promise<string | null> {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/facts", {
            method: 'GET',
            headers: {
                'X-Api-Key': NINJA_TOKEN
          }
        })

   
        if (!response.ok) {
            console.error(`API error: status ${response.status}`);
            return null;
        }

     
        const data: NinjaFact[] = await response.json();

        if (data && data.length > 0) {
            return data[0].fact;
        }

        return null;

    } catch (error) {
  
        console.error("An error occurred during the fetch request", error);
        return null;
    }
} 
