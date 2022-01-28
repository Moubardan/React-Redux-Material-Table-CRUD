import React, { useEffect } from "react";
import MaterialTable from "material-table";
import getInfo from "../../actions/home";
import Post from "../../actions/home/post";
import Put from "../../actions/home/edit";
import Delete from "../../actions/home/delete";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "City", field: "address.city" },
  ];

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);
  const { getHome } = todos;
  return (
    <>
      <MaterialTable
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(Post(newData));
                resolve();
                dispatch(getInfo());
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(Put(oldData.id, newData));
                resolve();
                dispatch(getInfo());
              }, 2000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(Delete(oldData.id));
                resolve();
                dispatch(getInfo());
              }, 2000);
            }),
        }}
        title="User List"
        data={getHome}
        columns={columns}
        options={{
          sorting: true,
          search: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
      />
    </>
  );
};

export default Home;
