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
        <h1 className="col-gray-90">Files</h1>
      </SidebarTab>

      <SidebarTab icon={<VscSearch />}>
        <h1 className="col-gray-90">Search</h1>
      </SidebarTab>

      <SidebarTab icon={<VscSourceControl />}>
        <h1 className="col-gray-90">Source control</h1>
      </SidebarTab>

      <SidebarTab icon={<VscDebugAlt />}>
        <h1 className="col-gray-90">Debugger</h1>
      </SidebarTab>

      <SidebarTab icon={<VscExtensions />}>
        <h1 className="col-gray-90">Extensions</h1>
      </SidebarTab>

      <SidebarTab icon={<VscGithubInverted />}>
        <h1 className="col-gray-90">GitHub</h1>
      </SidebarTab>

    </Sidebar>
  );
}

export default App;
