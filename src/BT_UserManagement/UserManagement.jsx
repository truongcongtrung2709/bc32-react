import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";
import Search from "./Search";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], // danh sách users
      selectedUser: null, // user được chọn để cập nhật
      searchTerm: "", // lưu trữ giá trị tìm kiếm
    };
  }

  // Phương thức call API và setState cho users
  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://62f5093b535c0c50e7684817.mockapi.io/users",
        {
          params: {
            email: this.state.searchTerm,
          },
        }
      );
      // Call API thành công => setState
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  // Phương thức call API get user by id và setState
  fetchUserById = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://62f5093b535c0c50e7684817.mockapi.io/users/${userId}`
      );
      // Call API thành công => setState
      this.setState({ selectedUser: data });
    } catch (error) {
      console.log(error);
    }
  };

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handleSubmitSuccess = (isReset) => {
    // isReset: true/false - có cần reset lại toàn bộ danh sách hay không
    if (isReset) {
      this.setState({ searchTerm: "" });
    } else {
      this.fetchUsers();
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchUsers();
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">User Management</h1>

        <UserForm
          user={this.state.selectedUser}
          onSubmitSuccess={this.handleSubmitSuccess}
        />

        <Search onSearch={this.handleSearch} />

        <UserList
          users={this.state.users}
          onSelect={this.fetchUserById}
          onDeleteSuccess={this.fetchUsers}
        />
      </div>
    );
  }
}
