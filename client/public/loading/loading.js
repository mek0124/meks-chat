let progress = 0;

const loadingText = document.getElementById('loadingText');
const loadingPercent = document.getElementById('loadingPercent');

const displayTextStrings = [
  "Starting Server",
  "Validating Data",
  "Setting Application Styles",
  "Loading User Data",
  "Petting a panda",
  "Fighting a rattlesnake",
  "Driving a car",
  "Drowning in a river",
  "We just don't know anymore",
  "Launching Application"
];

const loadingInterval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(loadingInterval);

    window.electronAPI.notifyLoadingComplete();
    return;
  }

  const index = Math.floor(progress / 10);

  loadingText.innerText = displayTextStrings[index] || "Loading...";
  loadingPercent.textContent = progress + '%';

  progress += 2;
}, 100);

document.getElementById('cancelButton').addEventListener('click', () => {
  window.electronAPI.cancelLoading();
});
