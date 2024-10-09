import { Sidebar, SidebarTab } from './components/sidebar/'

import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";

function App() {
  return (
    <Sidebar>

      <SidebarTab icon={<VscFiles />}>
        <h1>Files</h1>
      </SidebarTab>

      <SidebarTab icon={<VscSearch />}>
        <h1>Search</h1>
      </SidebarTab>

      <SidebarTab icon={<VscSourceControl />}>
        <h1>Source control</h1>
      </SidebarTab>

      <SidebarTab icon={<VscDebugAlt />}>
        <h1>Debugger</h1>
      </SidebarTab>

      <SidebarTab icon={<VscExtensions />}>
        <h1>Extensions</h1>
      </SidebarTab>

      <SidebarTab icon={<VscGithubInverted />}>
        <h1>GitHub</h1>
      </SidebarTab>

    </Sidebar>
  );
}

export default App;
