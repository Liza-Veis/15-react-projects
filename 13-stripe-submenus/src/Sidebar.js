import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, idx) => {
            const { links, page } = item;
            return (
              <article key={idx}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, idx) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={idx} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
