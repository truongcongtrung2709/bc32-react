import React from "react";

// Mọi component luôn nhận được một object props
// Mặc định props là một object rỗng: {}
// Khi một component được gọi và được truyền vào các properties, các giá trị đó sẽ được đưa vào bên trong object props của component

// C1: const Welcome = (props) => {}
// C2: const Welcome = ({name, age}) => {}
const Welcome = ({ name = "unknown", age = 0 }) => {
  return (
    <div>
      <h3>
        {/* Hello {props.name} - {props.age} */}
        Hello {name} - {age}
      </h3>
    </div>
  );
};

export default Welcome;
