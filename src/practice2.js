const inject = (items, sections) => {
  let newItems = [...items];
  sections.map((obj) => {
    let oiginalItem = items[obj.index];
    newItems.splice(newItems.indexOf(oiginalItem), 0, obj.content);
  });
  return newItems;
};
export { inject };
