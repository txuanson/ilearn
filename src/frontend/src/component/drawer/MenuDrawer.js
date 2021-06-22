import { Drawer } from "antd";
import React, { useState } from "react";
import DropdownMenu from "../menu/DropdownMenu";

export default function MenuDrawer({ user }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="text-gray-500 filter invert text-xl  block relative z-0"
      >
        <i class="fas fa-bars"></i>
      </button>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <DropdownMenu user={user} />
      </Drawer>
    </>
  );
}
