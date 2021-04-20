import { atom } from 'recoil';

const tasksState = atom({
  key: 'tasksState',
  default: [
    {
      title: 'Racing car...',
      content: 'Racing car sprays burning fuel into crowd.',
      priority: 'high',
      status: 'done'
    },
    {
      title: 'Japanese princess...',
      content: 'Japanese princess to wed commoner.',
      priority: 'medium',
      status: 'todo'
    },
    {
      title: 'Australian walks...',
      content:  'Australian walks 100km after outback crash.',
      priority: 'low',
      status: 'inProgress'
    }
  ]
});



export { tasksState }