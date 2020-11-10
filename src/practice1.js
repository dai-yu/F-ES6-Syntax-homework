const parseData = (input) => {
  let result = [{}, {}];
  input.data.map((dataItem, i) => {
    input.column.map((columnItem, index) => {
      result[i][columnItem.name] = dataItem[index];
    });
  });
  return result;
};
export { parseData };
