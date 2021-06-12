export type Future<T> = Promise<[T | null, any]>;

export default async function future<T>(promise: Promise<T>): Future<T> {
  try {
    const res = await promise;
    return [res, null];
  } catch (error) {
    return [null, error];
  }
}
