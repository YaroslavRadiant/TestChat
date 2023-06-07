const apiURL = 'https://dummyjson.com'

export function fetchMessagesFromApi() {
  return fetch(`${apiURL}/comments/`).then((response) => response.json()) //todo then catch
}
