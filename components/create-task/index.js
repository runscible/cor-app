import styles from '../../styles/Home.module.css'
import { Typography, Select, Input, Button, Divider } from 'antd';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { tasksState } from '../../state';

const { Option } = Select;
const { TextArea } = Input;
export default () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [content, setContent] = useState('');
  const [ state, setTasksState ] = useRecoilState(tasksState);
  const addTask = () => {
    setTasksState( oldTasks => [
      ...oldTasks, {
        title,
        status,
        priority,
        content
      }
    ])
  }

  const onChangeTitle = ({target: {value}}) => {
    setTitle(value);
  };
  const onChangePriority = ev => {
    setPriority(ev);
  };
  const onChangeStatus = ev => {
    setStatus(ev);
  };
  const onChangeContent = ({target: {value}}) => {
    setContent(value);
  };
  return (
    <>  
      <Divider style={{ width:500 }}>
      <Typography>crear tarea</Typography>
        <div className={styles.containerHorizontal}>
            <Input placeholder='titulo' onChange={onChangeTitle} />
            <Select placeholder='prioridad' onChange={onChangePriority}>
              <Option value='high'>alto</Option>
              <Option value='medium'>medio</Option>
              <Option value='low'>bajo</Option>
            </Select>
              <Select placeholder='estado' onChange={onChangeStatus}>
                <Option value='todo'>todo</Option>
                <Option value='inProgress'>in progress</Option>
                <Option value='done'>done</Option>
            </Select>
        </div>
        <div className={styles.containerVertical}>
            <TextArea onChange={onChangeContent} placeholder='contenido'/>
            <Button 
                title='crear tarea'
                style={{width: 150}}
                type="primary"
                onClick={addTask}>crear tarea</Button>
        </div>
      </Divider>
    </>
  )
}