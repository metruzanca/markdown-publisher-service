export async function getBody<Body>(request: Request): Promise<Body | null> {
  try {
    const body = await request.json() as Body;    
    return body;
  } catch (error) {   
    return null;
  }
}