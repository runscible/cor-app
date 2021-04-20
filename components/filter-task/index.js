import { Select, Divider, Typography, List, Card } from 'antd';
import { atom, selector, useRecoilValue, useRecoilState } from 'recoil';
import { tasksState } from '../../state';

const { Option } = Select;
const listStateFilter = atom({
  key: 'prioridad', 
  default: 'prioridad'  
});

const filteredState = selector({
  key: 'filteredState',
  get: ({ get }) => {
    const filter = get(listStateFilter);
    const tasks = get(tasksState);
    // TODO: add cosntants for this...
    switch(filter) {
      case 'priorityLow': 
        return tasks.filter(val => val.priority === 'low');
      case 'priorityMedium': 
        return tasks.filter(val => val.priority === 'medium');
      case 'priorityHigh': 
        return tasks.filter(val => val.priority === 'high');
      case 'statusTodo': 
        return tasks.filter(val => val.status === 'todo');
      case 'statusInProgress':
        return tasks.filter(val => val.status === 'inProgress');
      case 'statusDone':
          return tasks.filter(val => val.status === 'done');       
      default: 
        return tasks;      
    }
  }
})


export default () => {
  const [ filter, setFilter ] = useRecoilState(listStateFilter);
  const updateFilter = ev => {
      setFilter(ev);
  }
  const tasks = useRecoilValue(filteredState);
  return (
    <>
      <Divider title="filtrar">
        <Typography>filtrar tareas</Typography>
        <Select placeholder='prioridad'
                onChange={updateFilter}>
          <Option value='priorityHigh'>alto</Option>
          <Option value='priorityMedium'>medio</Option>
          <Option value='priorityLow'>bajo</Option>
        </Select>
          <Select onChange={updateFilter}  
                  placeholder='estado'>
            <Option value='statusTodo'>todo</Option>
            <Option value='statusInProgress'>in progress</Option>
            <Option value='StatusDone'>done</Option>
          </Select>
      </Divider>
      <List
                header={<div>list of tasks </div>}
                bordered
                dataSource={tasks}
                renderItem={item => (
                  <List.Item>
                    <Card 
                      title={item.title}
                      style={{ width: 300 }}>
                      description: {item.content}
                    </Card>
                  </List.Item>
                )}
       />
    </>
  )
}