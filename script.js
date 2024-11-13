// const country

const form = document.getElementById('form')
form.addEventListener('submit', fetchCountryDetails)

async function fetchCountryDetails(event) {
  event.preventDefault()
  const inputValue = document.getElementById('input').value // Get input value
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`, {
      method: 'POST', // or 'GET' if that's the request method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputValue }), // Only include body if using POST
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json() // Parse JSON response
    console.log(data) // Log or process response data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
