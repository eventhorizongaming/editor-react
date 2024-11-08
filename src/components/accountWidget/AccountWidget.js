import { useState, useEffect } from "react";

function AccountWidget() {
  const [signedIn, setSignedIn] = useState(window.accountManager.isSignedIn());
  const [account, setAccount] = useState(null);
  const [profile, setProfile] = useState(null);

  const loadProfile = async () => {
    if (!account) {
      setProfile(null);
      return;
    }

    setProfile(await account.getProfile());
  };

  const logIn = async () => {
    await window.accountManager.signIn();
    setAccount(await window.accountManager.getUser());
    setSignedIn(true);
  }

  const logOut = async () => {
    await window.accountManager.logOut();
    setAccount(null);
    setSignedIn(false);
  }
  
  useEffect(() => {
    loadProfile();
  }, account)

  useEffect(() => {
    console.log(profile)
  }, profile)

  if (signedIn) {
    async () => setAccount(await window.accountManager.getUser());
  }

  return (
    <>
      {profile && 
        <>
          <img draggable={false} style={{ borderRadius: 999 }} src={profile.avatar_url} />
          <p>{profile.name}</p>
          <p>@{profile.login}</p>
        </>
      }
      {signedIn && <button onClick={logOut}>Log out</button>}
      {!signedIn && <button onClick={logIn}>Sign in with GitHub</button>}
    </>
  );
}

export default AccountWidget;
