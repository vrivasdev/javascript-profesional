import Singleton from './Singleton';
// Singleton pattern allows to use only one instance. For example, if you
// wanna one modal for just one view
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("A === B?", a === b);