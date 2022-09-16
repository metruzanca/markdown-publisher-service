import { type RequestHandler, error, json } from "@sveltejs/kit";
import { StatusCodes } from 'http-status-codes'
import { getBody } from "$lib/handlers";
import type { Body, PlatformName, Response } from "$lib/platforms/types";
import platformSwitch from "$lib/platforms";
import { v4 } from 'uuid'

export const POST: RequestHandler = async ({ request }) => {
  const body = await getBody<Body>(request);

  const response: Response = {
    id: v4(),
    platforms: {}
  }

  if (body) {
    for (const platform of body.platform) {
      const name = platform.name as PlatformName;
      const PlatformClass = platformSwitch(name);
      if (PlatformClass) {
        const blog = new PlatformClass(platform.apiKey);
        response.platforms[name] = await blog.publish(body.article)
      }
    }

    return json(response);

  }

  throw error(StatusCodes.BAD_REQUEST, "Missing body")
}
