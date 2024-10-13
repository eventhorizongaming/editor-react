import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider, browserLocalPersistence } from "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { GithubAccount } from './GithubAccount';

class AccountManager {
  firebase;
  auth;
  githubAuthProvider;

  constructor() {
    this.firebase = initializeApp(firebaseConfig);
    this.auth = getAuth(this.firebase);
    this.auth.setPersistence(browserLocalPersistence)
    this.githubAuthProvider = new GithubAuthProvider();
  }

  async getGithubUser() {
    await this.auth.authStateReady();
    return new GithubAccount(this.getGithubToken(), this.auth.currentUser);
  }

  getGithubToken() {
    const authUserID = `firebase:providerTokens:${this.auth.config.apiKey}:[DEFAULT]`
    const authUserData = JSON.parse(localStorage.getItem(authUserID));

    return authUserData?.github;
  }

  setGithubToken(token) {
    const authUserID = `firebase:providerTokens:${this.auth.config.apiKey}:[DEFAULT]`
    const authUserData = JSON.parse(localStorage.getItem(authUserID)) ?? {};

    authUserData.github = token;
    localStorage.setItem(authUserID, JSON.stringify(authUserData))
  }

  async signInWithGithub() {
    const signInPopup = await signInWithPopup(this.auth, this.githubAuthProvider);
    const githubToken = GithubAuthProvider.credentialFromResult(signInPopup).accessToken;
    const firebaseAccount = signInPopup.user;
    const githubAccount = new GithubAccount(githubToken, firebaseAccount);

    this.setGithubToken(githubToken);
    await githubAccount.loadProfile();

    return githubAccount;
  }

  async logOut() {
    const authUserID = `firebase:providerTokens:${this.auth.config.apiKey}:[DEFAULT]`

    await this.auth.logOut();
    localStorage.removeItem(authUserID);
  }
}

export { AccountManager }
