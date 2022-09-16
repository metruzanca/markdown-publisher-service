import { type RequestHandler, error, json } from "@sveltejs/kit";
import { StatusCodes } from 'http-status-codes'
import { getBody } from "$lib/handlers";

type Body = {}
type Response = {}

export const POST: RequestHandler = async ({ request }) => {
  const body = await getBody<Body>(request);  
  
  const response: Response = {}
  if (body) {    
    return json(body);
  }

  throw error(StatusCodes.BAD_REQUEST, "Missing body")
}
