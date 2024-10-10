function SidebarTab({ title, children }) {
  return <>
    <div className="tab-heading">
      <h2 className="col-gray-90 tab-title">{title}</h2>
    </div>
    <div className="tab-content" tabIndex={2}>{children}</div>
  </>;
}

export { SidebarTab };
