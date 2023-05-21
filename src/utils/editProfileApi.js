const apiToken = process.env.REACT_APP_API_TOKEN;

export const editProfileApi = () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': apiToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation UpdateProfile($updateProfileId: String!, $firstName: String!, $lastName: String!, $email: String!, $isVerified: Boolean!, $imageUrl: String!, $description: String!) {
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
        updateProfileId: 'hrrcQa1J3oxwTDE52a0E',
        firstName: 'test',
        lastName: 'updated',
        email: 'test@updated.com',
        isVerified: false,
        imageUrl: 'test.com',
        description: 'test updated'
      }
    })
  };

  fetch('https://api.poc.graphql.dev.vnplatform.com/graphql', requestOptions)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
};
