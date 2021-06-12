import {
  Secret,
  sign as sgn,
  SignOptions,
  verify as vrfy,
  VerifyOptions,
  GetPublicKeyOrSecret,
} from "jsonwebtoken";
import future from "./future";

export {
  Secret,
  SignOptions,
  VerifyOptions,
  decode,
  DecodeOptions,
  GetPublicKeyOrSecret,
  Algorithm,
  JsonWebTokenError,
  JwtHeader,
  NotBeforeError,
  TokenExpiredError,
  VerifyErrors,
  SigningKeyCallback,
} from "jsonwebtoken";

export async function sign(
  payload: string | object | Buffer,
  secretOrPrivateKey: Secret,
  options?: SignOptions
) {
  return await future(
    new Promise<string | undefined>((res, rej) => {
      sgn(payload, secretOrPrivateKey, options!, (err, token) => {
        if (err) return rej(err);
        return res(token);
      });
    })
  );
}

export async function verify(
  token: string,
  secretOrPublicKey: Secret | GetPublicKeyOrSecret,
  options?: VerifyOptions
) {
  return await future(
    new Promise<object | undefined>((res, rej) => {
      vrfy(token, secretOrPublicKey, options!, (err, decoded) => {
        if (err) return rej(err);
        return res(decoded!);
      });
    })
  );
}
