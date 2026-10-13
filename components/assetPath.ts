const basePath = process.env.NODE_ENV === "production" ? "/vkconcept" : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
