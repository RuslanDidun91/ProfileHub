const apiToken = process.env.REACT_APP_API_TOKEN;

export const searchUsersApi = async (searchText, orderBy = { key: "is_verified", sort: "desc" }, rows = 10, page = 0) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': apiToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query GetAllProfiles(
            $orderBy: globalOrderBy,
            $searchString: String,
            $rows: Int,
            $page: Int
          ) {
            getAllProfiles(
              orderBy: $orderBy,
              searchString: $searchString,
              rows: $rows,
              page: $page
            ) {
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
          }
        `,
        variables: {
          orderBy,
          searchString: searchText,
          rows,
          page
        }
      })
    };

    const response = await fetch('https://api.poc.graphql.dev.vnplatform.com/graphql', requestOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Error: API request failed');
    }

    if (data.errors) {
      throw new Error(`GraphQL Error: ${data.errors[0].message}`);
    }
    return data;
  } catch (error) {
    console.error('Error searching:', error);
    throw error;
  }
};
