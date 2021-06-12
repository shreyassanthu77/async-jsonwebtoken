# Async JsonWebToken

Async wrapper around jsonwebtoken for JavaScript and TypeScript

> ## visit [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) for more info

## install

```bash
npm install async-jsonwebtoken
```

## API Reference

### Sign a Token

```js
const [token, err] = await jwt.sign(
  {
    id: 123,
    yourdata: "put here",
  },
  "This is a super secret"
);
```

| Parameter            | Type                         | Description                                      |
| :------------------- | :--------------------------- | :----------------------------------------------- |
| `payload`            | `string \| object \| Buffer` | **Required**. data to be signed                  |
| `secretOrPrivateKey` | `Secret`                     | **Required**. A private key to sign              |
| `options`            | `SignOptions`                | Options to be passed to jsonwebtoken sign method |

### Verify a Token

```js
const [decoded, err] = await jwt.verify(
  "Your JWT token to verify",
  "This is a super secret"
);
```

| Parameter           | Type                             | Description                                        |
| :------------------ | :------------------------------- | :------------------------------------------------- |
| `token`             | `string`                         | **Required**. token to be decoded                  |
| `secretOrPublicKey` | `Secret \| GetPublicKeyOrSecret` | **Required**. A private key to sign                |
| `options`           | `VerifyOptions`                  | Options to be passed to jsonwebtoken verify method |

> ## Note the rest of the library just reexports the [jsonwebtoken's](https://github.com/auth0/node-jsonwebtoken) exports
