export default {
  namespaced: true,
  state: () => ({
    name: "Miguel de Mendoza",
    title: "Motion Graphics and Programmer",
    birth: "16 - 07 - 1986",
    email: "m.legnacra@gmail.com",
    phone: "+34 674 737 556",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate diam elit, sed blandit est imperdiet quis. Praesent dapibus convallis sodales. Quisque commodo faucibus euismod. Donec ipsum est, rhoncus eu convallis id, dictum sed neque. Duis eleifend purus vitae massa vulputate molestie. Curabitur vel nulla eu quam condimentum feugiat. Sed iaculis est vitae mauris porta efficitur. Suspendisse quis erat ac massa elementum ullamcorper. Phasellus sit amet cursus tellus.'
  }),
  getters: {
    name: state => state.name,
    title: state => state.title,
    birth: state => state.birth,
    email: state => state.email,
    phone: state => state.phone
  }
}