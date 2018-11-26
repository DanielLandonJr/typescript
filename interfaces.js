// const showTodo = (todo: { title: string; text: string }) => {
//   console.log(`${todo.title}: ${todo.text}`);
// };
var showTodo = function (todo) {
    console.log(todo.title + ": " + todo.text);
};
showTodo({ title: 'Dog', text: 'Feed The Dog' });
