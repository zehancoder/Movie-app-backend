import React, { useEffect, useState } from 'react'
import { deleteUser, getAllUsers } from '../api/users.api';
import { useDispatch, useSelector } from 'react-redux';
import { usersStoreState, userstoreDataErr } from '../../../toolkit/slice';
import { MdDelete } from "react-icons/md";
import { MdBlock } from "react-icons/md";

function Users() {
  const [loading, setLoading] = useState(false);
  const storedUsers = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [deleteMessage, setDeleteMessage] = useState(false);
  const backgroundColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-indigo-500',
    // Add more as needed
  ];

  const fetchUsers = async () => {
    const response = await getAllUsers();
    if (response.success === false) {
      dispatch(userstoreDataErr(false));
      return;
    }

    const afterBgAdd = response.data.users.map((user) => {
      user.profileImg = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
      return user
    });

    dispatch(usersStoreState(response.data.users));
    dispatch(userstoreDataErr(true));
    setLoading(false);
  }
  useEffect(() => {
    if (storedUsers.data.length === 0) {
      setLoading(true);
      fetchUsers();
    }
  }, []);

  const deleteUserFunc = async (userId) => {
    const deletedUser = await deleteUser(userId);
    setLoading(true);
    setDeleteMessage(true)
    fetchUsers();
    setTimeout(() => {
      setDeleteMessage(false)
    }, 3000)
  }
  return (
    <div className='min-h-screen px-5 py-10'>
      <div className=''>
        <h1 className='text-3xl font-bold text-[#0f44c9d3]'>Users</h1>
        <div className=' mt-5'>
          {
            storedUsers.data.map((item) => {
              return <div className='px-8 mt-4 flex items-center lg:flex-row flex-col justify-between w-full lg:w-[80%] py-4 bg-[#0F0F0F] rounded-md border border-[#1F1F1F]'>
                <div className='flex items-center  gap-5'>
                  <div className={`h-8 w-8 flex items-center justify-center text-white font-bold rounded-full ${item.profileImg}`}>
                    <h1>{item.username[0].toUpperCase()}</h1>
                  </div>
                  <div className='flex items-center text-gray-300 gap-7 ml-5'>
                    <p>Name: {item.username[0].toUpperCase() + item.username.slice(1, item.username.length)}</p>
                    <p>Email: {item.email}</p>
                    <p>Uid: {item._id}</p>
                    <p className='text-[17px]'>Role: <span className={item.role === 'admin' ? 'text-[#0f44c9d3] text-xl font-bold' : 'text-white'}>{item.role}</span></p>

                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <div className='px-2 border border-[#1F1F1F] py-[7px] text-gray-300 text-[19px] rounded-full linear-bg cursor-pointer'>
                    <MdBlock />
                  </div>
                  <div onClick={() => deleteUserFunc(item._id.toString())} className='px-2 py-[7px] border border-[#1F1F1F] text-gray-300 text-[19px] rounded-full linear-bg cursor-pointer'>
                    <MdDelete />
                  </div>

                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className={` transition duration-300 ${deleteMessage ? 'translate-x-0' : 'translate-x-[150%]'} absolute bottom-20 right-20 text-lg font-medium px-5 py-3 rounded-lg linear-bg-noHover`}>
        Successfully deleted!
      </div>
    </div>
  )
}

export default Users