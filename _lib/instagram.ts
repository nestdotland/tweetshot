/* tslint:disable:no-console */
import { IgApiClient } from 'instagram-private-api';
import { readFile } from 'fs';
import { promisify } from 'util';
const readFileAsync = promisify(readFile);

const ig = new IgApiClient();

async function login() {
  // basic login-procedure
  ig.state.generateDevice(process.env.IG_USERNAME || "");
  await ig.account.login(process.env.IG_USERNAME || "", process.env.IG_PASSWORD || "");
}

export async function post(path: string, caption: string) {
  await login();

  const publishResult = await ig.publish.photo({
    // read the file into a Buffer
    file: await readFileAsync(path),
    // optional, default ''
    caption,
  });

  console.log(publishResult);
};
