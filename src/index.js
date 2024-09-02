async function fetchData() {
  const response = await fetch("./src/data.json");
  const data = await response.json();
  return data;
}

async function processData() {
  const data = await fetchData();
  data.forEach((element) => {
    console.log("d", element.timeframes.daily.current);
  });
}

processData();
