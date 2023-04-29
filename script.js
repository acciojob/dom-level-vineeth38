//your JS code here. If required.
const container = document.getElementById('container');
    const level = getLevel(container);
    alert(`The level of the element is: ${level}`);

    function getLevel(element) {
      let level = 0;
      while (element.parentElement) {
        level++;
        element = element.parentElement;
      }
      return level;
    }