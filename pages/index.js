import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { List, Card } from 'antd';
import {  atom, useRecoilState, selector, useRecoilValue } from 'recoil';
import CreateTask from '../components/create-task';
import FilterTask from '../components/filter-task';
import { tasksState } from '../state';


export default function Home() {
  const tasks = useRecoilValue(tasksState)
  return (
    <div className={styles.container}>
          <>
            <CreateTask />
            <FilterTask />  
        </>
    </div>
  )
}
