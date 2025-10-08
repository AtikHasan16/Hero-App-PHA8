const getDataFromLocal = () => {
  const getData = localStorage.getItem("apps");
  if (getData) {
    const existingData = JSON.parse(getData);
    return existingData;
  } else {
    return [];
  }
};

const setDataToLocal = (data) => {
  //   console.log(data);

  const existingData = getDataFromLocal();
//   console.log(existingData);

  const matchedData = existingData.some((exData) => exData.id === data.id);
  if (matchedData) {
    alert("data already exist");
  } else {
    existingData.push(data);
    localStorage.setItem("apps", JSON.stringify(existingData));
  }
};

export { setDataToLocal, getDataFromLocal };
