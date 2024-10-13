import { Octokit } from "octokit";

class GithubAccount {
  accessToken;
  octokit;
  profile;
  requestHeaders;
  firebaseAccount;

  constructor(accessToken, firebaseAccount) {
    this.accessToken = accessToken;
    this.firebaseAccount = firebaseAccount;
    this.requestHeaders = {
      'X-GitHub-Api-Version': '2022-11-28'
    };
    this.octokit = new Octokit({
      auth: this.accessToken
    });

    this.loadProfile();
  }

  async loadProfile() {
    const userRequest = await this.octokit.request('GET /user', {
      headers: this.requestHeaders
    })

    this.profile = userRequest.data;
  }

  async delete() {
    await this.firebaseAccount.delete();
  }
}

export { GithubAccount }