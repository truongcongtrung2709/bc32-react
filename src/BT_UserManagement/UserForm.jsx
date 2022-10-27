import React, { Component } from "react";
import axios from "axios";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // state values là một object lưu trữ giá trị của các inputs
      values: {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address: "",
      },
    };
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState((state) => ({
      values: {
        ...state.values, // sao chép lại những giá trị hiện đang có trong object values
        [name]: value, // thay đổi 1 thuộc tính trong object values
      },
    }));
  };

  handleSubmit = async (evt) => {
    // Ngăn hành vi reload mặc định khi submit form
    evt.preventDefault();

    const { id, ...payload } = this.state.values;
    try {
      if (id) {
        // Gọi API cập nhật user
        await axios.put(
          `https://62f5093b535c0c50e7684817.mockapi.io/users/${id}`,
          payload
        );
      } else {
        // Gọi API thêm user
        await axios.post(
          "https://62f5093b535c0c50e7684817.mockapi.io/users",
          payload
        );
      }

      // Dữ liệu chỉ mới thay đổi ở phía server, ta cần gọi lại API get users để cập nhật dữ liệu ở client
      // Tuy nhiên việc call API get users và setState đã được thực hiện ở component UserManagement thông qua hàm fetchUsers
      // Để component UserForm có thể gọi được hàm fetchUsers, ta sẽ truyền hàm fetchUsers xuống component UserForm thông qua prop onSubmitSuccess
      const isReset = id ? false : true;
      this.props.onSubmitSuccess(isReset);
      // Reset inputs
      this.setState({
        values: {
          firstName: "",
          lastName: "",
          email: "",
          dateOfBirth: "",
          address: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.user && prevProps.user !== this.props.user) {
      // Kiểm tra nếu prop user khác null và giá trị của nó bị thay đổi
      // => Dùng giá trị mới của prop user để setState lại cho values
      this.setState({ values: { ...this.props.user } });
    }
  }

  render() {
    const { values } = this.state;

    return (
      <form className="my-5" onSubmit={this.handleSubmit}>
        {/* FirstName */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName" // giá trị của name phải trùng với tên key trong state values'
            value={values.firstName}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* LastName */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            value={values.lastName}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={values.email}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* DateOfBirth */}
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            value={values.dateOfBirth}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            name="address"
            value={values.address}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    );
  }
}
