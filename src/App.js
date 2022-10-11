import Welcome from "./1_Components/Welcome";
import Home from "./1_Components/BT_Home/Home";
import MSI from "./1_Components/BT_MSI/MSI";
import FunctionJSX from "./2_JSX/FunctionJSX";
import ClassJSX from "./2_JSX/ClassJSX";
import Events from "./3_Events/Events";
import EventsClass from "./3_Events/EventsClass";
import Conditional from "./4_Conditional/Conditional";
import Props from "./5_Props/Props";
import Map from "./6_Map/Map";
import ShoesShop from "./BT_ShoesShop/ShoesShop";
import State from "./7_State/State";
import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
import Lifecycle from "./8_Lifecycle/Lifecycle";
import UserManagement from "./BT_UserManagement/UserManagement";
import Composition from "./9_Composition/Composition";

// Component là 1 function return về jsx, mô tả những gì sẽ hiển thị ra giao diện
// Tên component bắt buộc viết hoa chứ cái đầu
function App() {
  // JSX: Javascript + XML - Là một cú pháp đặc biệt cho phép viết html bên trong javascript
  // Một số quy tắc khi viết JSX:
  // - class -> className
  // - for -> htmlFor
  // - các thuộc tính phải viết theo dạng camelCase. VD: tab-index -> tabIndex
  return (
    // <div className="App">
    //   <h1>Hello Reactjs</h1>
    //   <Welcome />
    //   <Welcome />
    // </div>

    // 1. Component
    // <Home />
    // <MSI />

    // 2. JSX
    // <>
    //   <FunctionJSX />
    //   <ClassJSX />
    // </>

    // 3. Events
    // <>
    //   <Events />
    //   <EventsClass />
    // </>

    // 4. Conditional
    // <Conditional />

    // 5. Props
    // <Props />

    // 6. Map
    // <Map />

    // Bài tập ShoeShop
    // <ShoesShop />

    // 7. State
    // <State message="Hello BC32" />

    // Bài tập ShoppingCart
    // <ShoppingCart />

    // 8. Lifecycle
    // <Lifecycle />

    // Bài tập UserManagement
    // <UserManagement />

    // 9_Composition
    <Composition/>
  );
}

export default App;
