import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider, browserLocalPersistence } from "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { Account } from './Account';

class AccountManager {
  firebase;
  auth;
  authProvider;

  constructor() {
    this.firebase = initializeApp(firebaseConfig);
    this.auth = getAuth(this.firebase);
    this.auth.setPersistence(browserLocalPersistence)
    this.authProvider = new GithubAuthProvider();
  }

  async getUser() {
    await this.auth.authStateReady();

    if (!this.isSignedIn()) {
      return null;
    }

    return new Account(this.getAccessToken(), this.auth.currentUser);
  }

  getAccessToken() {
    const authUserID = `firebase:providerTokens:${this.auth.config.apiKey}:[DEFAULT]`
    const authUserData = JSON.parse(localStorage.getItem(authUserID));

    return authUserData?.github;
  }

  setAccessToken(token) {
    const authUserID = `firebase:providerTokens:${this.auth.config.apiKey}:[DEFAULT]`
    const authUserData = JSON.parse(localStorage.getItem(authUserID)) ?? {};

    authUserData.github = token;
    localStorage.setItem(authUserID, JSON.stringify(authUserData))
  }

  async signIn() {
    const signInPopup = await signInWithPopup(this.auth, this.authProvider);
    const githubToken = GithubAuthProvider.credentialFromResult(signInPopup).accessToken;
    const firebaseAccount = signInPopup.user;

    this.setAccessToken(githubToken);
  }

  async logOut() {
    const authUserID = `firebase:providerTokens:${this.auth.config.apiKey}:[DEFAULT]`

    await this.auth.signOut();
    localStorage.removeItem(authUserID);
  }

  isSignedIn() {
    if (this.auth.currentUser) {
      return true;
    }

    return false;
  }
}

export { AccountManager }
