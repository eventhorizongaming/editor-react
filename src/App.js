import { Sidebar, SidebarTab } from './components/sidebar/'
import { AccountWidget } from './components/accountWidget';

import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";

function App() {
  const signIn = async () => {
    //await window.accountManager.signInWithGithub();
    console.log(await window.accountManager.getGithubUser());
  }

  return (
    <>
      <Sidebar>

        <SidebarTab icon={<VscFiles />} title="Explorer">
          <h1 className="col-gray-90">Files dummy content</h1>
        </SidebarTab>

        <SidebarTab icon={<VscSearch />} title="Search">
          <h1 className="col-gray-90">Search dummy content</h1>
        </SidebarTab>

        <SidebarTab icon={<VscSourceControl />} title="Source control">
          <h1 className="col-gray-90">Source control dummy content</h1>
        </SidebarTab>

        <SidebarTab icon={<VscDebugAlt />} title="Run and Debug">
          <h1 className="col-gray-90">Debugger dummy content</h1>
        </SidebarTab>

        <SidebarTab icon={<VscExtensions />} title="Extensions">
          <h1 className="col-gray-90">Extensions dummy content</h1>
        </SidebarTab>

        <SidebarTab icon={<VscGithubInverted />} title="GitHub">
          <h1 className="col-gray-90">GitHub Account</h1>
          <AccountWidget />
        </SidebarTab>

      </Sidebar>
    </>
  );
}

export default App;
