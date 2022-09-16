import { type RequestHandler, error, json } from "@sveltejs/kit";
import { StatusCodes } from 'http-status-codes'
import { getBody } from "$lib/handlers";
import type { Body, PlatformName, Response } from "$lib/platforms/types";
import platformSwitch from "$lib/platforms";

export const POST: RequestHandler = async ({ request }) => {
  const body = await getBody<Body>(request);
  console.log('body ', body);
  

  const response: Response = {
    platforms: {},
  }

  if (body) {
    for (const platform of body.platform) {
      const name = platform.name as PlatformName;
      const PlatformClass = platformSwitch(name);
      if (PlatformClass) {
        console.log(PlatformClass.name);
        
        const blog = new PlatformClass(platform.apiKey);
        response.platforms[name] = await blog.publish({ ...body.article, id: body.id })
      }
    }

    return json(response);

  }

  throw error(StatusCodes.BAD_REQUEST, "Missing body")
}
