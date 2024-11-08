import { Octokit } from "octokit";

class Account {
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
  }

  async loadProfile() {
    const userRequest = await this.octokit.request('GET /user', {
      headers: this.requestHeaders
    })

    this.profile = userRequest.data;
  }

  async getProfile() {
    if (!this.profile) {
      await this.loadProfile();
    }

    return this.profile;
  }

  async delete() {
    await this.firebaseAccount.delete();
  }
}

export { Account }