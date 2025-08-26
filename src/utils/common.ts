export async function delay(duration: number) {
  await new Promise((resolve, _) => setTimeout(() => resolve(true), duration));
}
