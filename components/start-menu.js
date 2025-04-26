"use client";

import * as React from "react";
import { Menu } from "@base-ui-components/react/menu";
import "./css/nav-bg.scss";

export default function BasicMenu() {
  return (
    <>
      <Menu.Root>
        <Menu.Trigger className="start-btn" id="basic-button">
          Start <MenuStartIcon className="icon-class" />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Backdrop />
          <Menu.Positioner>
            <Menu.Popup
              className="menu-popup"
              id="basic-menu"
              aria-labelledby="basic-button"
            >
              <Menu.Arrow />

              <Menu.Item
                className="menuitem"
                onSelect={() => console.log("Folder clicked")}
              >
                <img
                  src="../../images/folders-icon.png"
                  alt="folders icon"
                  id="icons"
                />
                Folder
              </Menu.Item>

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <Menu.Item className="menuitem" onSelect={() => {}}>
                  <img
                    src="../../images/linkedin-icon.png"
                    alt="linkedin icon"
                    id="icons"
                  />
                  Linkedin
                </Menu.Item>
              </a>

              <a
                href="https://github.com/kay0218"
                target="_blank"
                rel="noreferrer"
              >
                <Menu.Item className="menuitem" onSelect={() => {}}>
                  <img
                    src="../../images/github-icon.png"
                    alt="github icon"
                    id="icons"
                  />
                  Github
                </Menu.Item>
              </a>

              <Menu.Item
                className="menuitem bottommenuitem"
                onSelect={() => console.log("Log Out")}
              >
                <img
                  src="../../images/log-out-icon.png"
                  alt="log out icon"
                  id="icons"
                />
                Log Out
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </>
  );
}

function MenuStartIcon() {
  return (
    <img src="../../images/start-icon.png" alt="start menu icon" id="icons" />
  );
}
