const form = document.getElementById('weatherForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = document.getElementById('locationInput').value;

  const apiKey = '8831c11487794287a4f54744252505';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Location not found');

    const data = await response.json();
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;

    resultDiv.innerHTML = `
      <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
});
