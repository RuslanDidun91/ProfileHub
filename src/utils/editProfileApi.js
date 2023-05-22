const apiToken = process.env.REACT_APP_API_TOKEN;

export const editProfileApi = (updatedProfile) => {

  const apiUrl = 'https://api.poc.graphql.dev.vnplatform.com/graphql'
  const { id, firstName, lastName, email, isVerified, imageUrl, description } = updatedProfile;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': apiToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation UpdateProfile(
          $updateProfileId: String!, 
          $firstName: String!, 
          $lastName: String!, 
          $email: String!, 
          $isVerified: Boolean!, 
          $imageUrl: String!, 
          $description: String!) {
          updateProfile(
            id: $updateProfileId,
            first_name: $firstName,
            last_name: $lastName,
            email: $email,
            is_verified: $isVerified,
            image_url: $imageUrl,
            description: $description
          ) {
            id
            first_name
            last_name
            email
            is_verified
            image_url
            description
          }
        }
      `,
      variables: {
        updateProfileId: id,
        firstName,
        lastName,
        email,
        isVerified,
        imageUrl,
        description
      }
    })
  };

  return fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error: API request failed');
      }
      return response.json();
    })
    .then(data => {
      if (data.errors) {
        throw new Error(`GraphQL Error: ${data.errors[0].message}`);
      }
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};
