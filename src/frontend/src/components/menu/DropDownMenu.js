import { Menu, Dropdown, Row, Col } from "antd";


export default function DropDownMenu({category}) {
    const menu = (
        <Menu className="mt-3">
          <Row >
            {category.map((item)=>(
                <Col xl={6} md={6} >
                <Menu.Item >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                    className="text-center"
                  >
                      <div className="text-center">{item.name}</div>
                    
                  </a>
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
