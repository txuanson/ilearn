import { Menu, Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function DropDownMenu({ category }) {
  const menu = (
    <Menu className="mt-3">
      <Row>
        {category.map((item) => (
          <Col xl={6} md={6}>
            <Menu.Item>
              <Link to={"/category/" + item._id} className="text-center">
                <div className="text-center">{item.name}</div>
              </Link>
            </Menu.Item>
          </Col>
        ))}
      </Row>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Category
      </a>
    </Dropdown>
  );
}
