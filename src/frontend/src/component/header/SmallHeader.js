import { Dropdown } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuDrawer from "../drawer/MenuDrawer";
import DropdownMenu from "../menu/DropdownMenu";

function SmallHeader({ user }) {
  return (
    <div className="flex items-center p-2">
      <div>
        <Link to="/">
          <h2 className="text-gray-400 font-semibold text-3xl md:mx-2">
            <span className="text-blue-500">i</span>Learn
          </h2>
        </Link>
      </div>
      <div className="ml-auto block md:hidden">
        <MenuDrawer user={user} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmallHeader);
