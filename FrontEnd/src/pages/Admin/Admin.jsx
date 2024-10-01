import React from 'react';
import { Tabs } from 'antd';
import Header from '../../components/Header'
import AdminIntro from './AdminIntro'

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Intro',
    children: <AdminIntro />,
  },
  {
    key: '2',
    label: 'About',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Experience',
    children: 'Content of Tab Pane 3',
  },
];

const Admin = () => {
  return (
    <div>
      <Header />
      <main className='py-0 px-4 font-semibold'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </main>
    </div>
  )
}

export default Admin