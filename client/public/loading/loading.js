/*
Copyright (C) 2025  mekasu0124

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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

