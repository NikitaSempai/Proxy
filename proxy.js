const Person = {
  name: "Nikita",
  age: 19,
  job: "Tester",
};

const op = new Proxy(Person, {
  get(target, prop) {
    console.log(`Getting prop: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target, prop) {
    return ["age", "name", "job"].includes(prop);
  },
});
