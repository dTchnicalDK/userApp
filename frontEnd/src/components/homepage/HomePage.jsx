import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css";

function HomePage() {
  const [userData, setUserData] = useState([]);

  // useEffect to fetch data from MongoDb of all users and set that data to userData variable;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getAll");
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  // console.log(userData);

  return (
    <div className="tableContainer">
      <table className="userTable">
        <caption>Registered users</caption>

        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>id</th>
            <th>user first name</th>
            <th>user last name</th>
            <th colSpan={3}>email id</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the table body with data from server */}
          {userData.map((data, index) => {
            return (
              <tr key={data._id}>
                <td key={data._id + "sl"}>{index + 1}</td>
                <td key={data._id + "id"}>{data._id}</td>
                <td key={data._id + "fname"}>{data.fname}</td>
                <td key={data._id + "lastName"}>{data.lname}</td>
                <td key={data._id + "email"}>{data.email}</td>
                <td key={data._id + "edit"}>edit</td>
                <td key={data._id + "delete"}>delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
