async function fetchData() {
  const response = await fetch("./src/data.json");
  const data = await response.json();
  return data;
}

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

async function processData() {
  const data = await fetchData();

  const theme = document.querySelectorAll(".theme");
  const trackingTime = document.querySelectorAll(".trackingTime");

  theme.forEach((theme, index) => {
    const title = document.createElement("h3");

    title.textContent = data[index].title;
    theme.appendChild(title);
  });

  function clearTrackingTime() {
    trackingTime.forEach((tracking) => {
      const typeTrackings = tracking.querySelectorAll(".typeTracking");
      typeTrackings.forEach((typeTracking) => {
        tracking.removeChild(typeTracking);
      });
    });
  }
  function Daily() {
    trackingTime.forEach((trackingTime, index) => {
      const container = document.createElement("div");
      const dailyCurrent = document.createElement("h1");
      const dailyPrevious = document.createElement("p");
      container.classList.add("typeTracking");
      dailyCurrent.textContent = data[index].timeframes.daily.current + "hrs";

      dailyPrevious.textContent = "Yesterday" + " " + "-" + data[index].timeframes.daily.previous + "hrs";
      container.appendChild(dailyCurrent);
      container.appendChild(dailyPrevious);
      trackingTime.appendChild(container);
    });
  }

  function Weekly() {
    trackingTime.forEach((trackingTime, index) => {
      const container = document.createElement("div");
      const dailyCurrent = document.createElement("h1");
      const dailyPrevious = document.createElement("p");
      container.classList.add("typeTracking");

      dailyCurrent.textContent = data[index].timeframes.weekly.current + "hrs";
      dailyPrevious.textContent = "Last Week" + " " + "-" + data[index].timeframes.weekly.previous + "hrs";
      container.appendChild(dailyCurrent);
      container.appendChild(dailyPrevious);
      trackingTime.appendChild(container);
    });
  }
  function Monthly() {
    trackingTime.forEach((trackingTime, index) => {
      const container = document.createElement("div");
      const dailyCurrent = document.createElement("h1");
      const dailyPrevious = document.createElement("p");
      container.classList.add("typeTracking");

      dailyCurrent.textContent = data[index].timeframes.monthly.current + "hrs";
      dailyPrevious.textContent = "Last Month" + " " + "-" + data[index].timeframes.monthly.previous + "hrs";
      container.appendChild(dailyCurrent);
      container.appendChild(dailyPrevious);
      trackingTime.appendChild(container);
    });
  }

  Weekly();
  daily.addEventListener("click", () => {
    clearTrackingTime();
    Daily();
  });
  weekly.addEventListener("click", () => {
    clearTrackingTime();
    Weekly();
  });
  monthly.addEventListener("click", () => {
    clearTrackingTime();
    Monthly();
  });
}

processData();
