class Component {
   'use strict';

   constructor(options) {
      this.options = options;
      this.state = {};
      this.container = undefined;
   }

   render() {
      return `<div ></div>`;
   }

   /**
    * помещает верстку компонента в dom
    * @param {DOMElement} container 
    * @param {String} position 
    */
   mount(container, position) {

      this.beforeMount();

      const newComponent = document.createElement('div');

      newComponent.innerHTML = this.render(this.options);

      this.container = newComponent.firstElementChild;

      container.insertAdjacentElement( position || 'beforeend', newComponent.firstElementChild);

      newComponent.remove();

      this.afterMount();
   }


   update() { }

   unmount() {
      this.beforeUnmount();

      this.removeContainer();

      this.afterUnmount();
   }

   removeContainer() {
      if (this.container) {
         this.container.remove();
         this.container = undefined;
      }
   }

   beforeMount() {}

   afterMount() {}

   beforeUnmount() {}

   afterUnmount() {}
}
class Student extends Component{
   render(){
      return
   }
}
export default Component;
