export default (className, value) => {
  if (!document) return;

  document.body.classList.toggle(className, value);
};
