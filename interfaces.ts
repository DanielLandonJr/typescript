// const showTodo = (todo: { title: string; text: string }) => {
//   console.log(`${todo.title}: ${todo.text}`);
// };

// showTodo({ title: 'Trash', text: 'Take Out Trash' });

interface ITodo {
  title: string;
  text: string;
}
const showTodo = (todo: ITodo) => {
  console.log(`${todo.title}: ${todo.text}`);
};

showTodo({ title: 'Dog', text: 'Feed The Dog' });
