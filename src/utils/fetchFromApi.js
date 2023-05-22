const apiToken = process.env.REACT_APP_API_TOKEN;

export const getUsers = async () => {

  const apiUrl = 'https://api.poc.graphql.dev.vnplatform.com/graphql';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': apiToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
        getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
          size
          profiles {
            id
            first_name
            last_name
            email
            is_verified
            image_url
            description
          }
        }
      }`,
      variables: JSON.stringify({
        orderBy: {
          key: 'is_verified',
          sort: 'desc'
        },
        rows: 50,
        page: 0,
        searchString: ''
      })
    })
  });
  const data = await response.json();
  return data.data.getAllProfiles.profiles;
};