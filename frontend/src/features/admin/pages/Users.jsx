import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../api/users.api";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMsgState,
  usersStoreState,
  userstoreDataErr,
} from "../../../toolkit/slice";
import { MdDelete } from "react-icons/md";
import { MdBlock } from "react-icons/md";

function Users() {
  const [loading, setLoading] = useState(false);
  const storedUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deleteMessage = useSelector((state) => state.errMessage);
  const backgroundColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-indigo-500",
    // Add more as needed
  ];

  const fetchUsers = async () => {
    const response = await getAllUsers();
    if (response.success === false) {
      dispatch(userstoreDataErr(false));
      dispatch(errorMsgState(response.message));
      return;
    }

    const afterBgAdd = response.data.users.map((user) => {
      user.profileImg =
        backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
      return user;
    });

    dispatch(usersStoreState(response.data.users));
    dispatch(userstoreDataErr(true));
    setLoading(false);
  };
  useEffect(() => {
    if (storedUsers.data.length === 0) {
      setLoading(true);
      fetchUsers();
    }
  }, []);

  const deleteUserFunc = async (userId) => {
    const deletedUser = await deleteUser(userId);
    setLoading(true);
    dispatch(errorMsgState("User Delete Successfully"));
    fetchUsers();
  };
  return (
    <div className="min-h-screen px-5 py-10 relative">
      <div className="">
        <h1 className="text-3xl font-bold text-[#0f44c9d3]">Users</h1>
        <div className=" mt-5">
          {storedUsers.data.map((item) => {
            return (
              <div className="px-8 mt-4 flex items-center lg:flex-row flex-col justify-between w-full lg:w-[80%] py-4 bg-[#0F0F0F] rounded-md border border-[#1F1F1F]">
                <div className="flex items-center flex-wrap  gap-5">
                  <div
                    className={`h-8 w-8 flex items-center justify-center text-white font-bold rounded-full ${item.profileImg}`}
                  >
                    <h1>{item.username[0].toUpperCase()}</h1>
                  </div>
                  <div className="flex items-center flex-wrap md:text-base text-[14px] text-gray-300 gap-7 ml-5">
                    <p>
                      Name:{" "}
                      {item.username[0].toUpperCase() +
                        item.username.slice(1, item.username.length)}
                    </p>
                    <p>Email: {item.email}</p>
                    <p>Uid: {item._id}</p>
                    <p className="text-[15px] md:text-[17px]">
                      Role:{" "}
                      <span
                        className={
                          item.role === "admin"
                            ? "text-[#0f44c9d3] text-xl font-bold"
                            : "text-white"
                        }
                      >
                        {item.role}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="px-2 border border-[#1F1F1F] py-5 md:py-[7px] text-gray-300 text-[17px] md:text-[19px] rounded-full linear-bg cursor-pointer">
                    <MdBlock />
                  </div>
                  <div
                    onClick={() => deleteUserFunc(item._id.toString())}
                    className="px-2 py-5 md:py-[7px] border border-[#1F1F1F] text-gray-300 text-[17px] md:text-[19px] rounded-full linear-bg cursor-pointer"
                  >
                    <MdDelete />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        class={`space-y-12 p-4 transition duration-300 fixed bottom-20 right-5 ${deleteMessage !== "" ? "translate-x-0" : "translate-x-[150%]"} `}
      >
        <div
          class="flex items-center gap-4 p-5 rounded-md max-w-4xl mx-auto shadow-[0_2px_16px_-3px_rgba(144,144,144,0.4)] bg-blue-600"
          role="alert"
        >
          <div class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0 w-5 h-5 fill-white"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 0C114.509 0 0 114.496 0 256c0 141.489 114.496 256 256 256 141.491 0 256-114.496 256-256C512 114.511 397.504 0 256 0zm26.289 357.621c0 8.088-11.794 16.174-26.284 16.174-15.164 0-25.946-8.086-25.946-16.174V229.234c0-9.435 10.783-15.839 25.946-15.839 14.49 0 26.284 6.404 26.284 15.839v128.387zm-26.283-175.225c-15.501 0-27.631-11.457-27.631-24.263 0-12.805 12.131-23.925 27.631-23.925 15.164 0 27.296 11.12 27.296 23.925 0 12.806-12.133 24.263-27.296 24.263z"
                data-original="#000000"
              />
            </svg>
            <p class="text-white text-base">{errorMsgState}</p>
          </div>
          <svg
            onClick={() => dispatch(errorMsgState(""))}
            xmlns="http://www.w3.org/2000/svg"
            class="shrink-0 w-[14px] h-[14px] ml-auto cursor-pointer fill-white hover:fill-gray-100"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            />
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Users;
