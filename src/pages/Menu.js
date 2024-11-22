import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Menu() {
  return (
    <div className="Menu">
    <p>Menu Page</p>
    <Tabs
      defaultActiveKey="{apps}"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="apps" title="Appetizers" id="apps">
        Appetizers
      </Tab>
      <Tab eventKey="pasta" title="Pasta Meals">
        Pasta Meals
      </Tab>
      <Tab eventKey="pizza" title="Make Your Own Pizza">
        Make Your Own Pizza
      </Tab>
      <Tab eventKey="drinks" title="Drinks">
        Drinks
      </Tab>
    </Tabs>
    </div>
  );
}

export default Menu;
