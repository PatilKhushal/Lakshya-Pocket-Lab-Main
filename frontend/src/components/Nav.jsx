import React from 'react'
import TodoAddButton from './generic/AddButton';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate()
  return (
    <div className='absolute bottom-0 bg-sidebar-bg dark:bg-sidebar-bg-dark border border-black dark:border-0 p-8 w-max text-white flex justify-center items-center large-mobile:w-full rounded-xl'>
        <TodoAddButton name={"Add Task"} onClick={() => navigate('/add-task')}/>
    </div>
  )
}
