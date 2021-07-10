/* tslint:disable:no-console */
import { IgApiClient } from 'instagram-private-api';

const ig = new IgApiClient();

async function login() {
  // basic login-procedure
  ig.state.generateDevice(process.env.IG_USERNAME || "");
  await ig.account.login(process.env.IG_USERNAME || "", process.env.IG_PASSWORD || "");
}

export async function post(file: Buffer, caption: string) {
  await login();
  const publishResult = await ig.publish.photo({
    // pass a Buffer from screenshot tool
    file,
    // optional, default ''
    caption,
  });

  console.log(publishResult);
};
