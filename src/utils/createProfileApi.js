const apiToken = process.env.REACT_APP_API_TOKEN;

export const createProfileApi = async (profileData) => {

  const apiUrl = 'https://api.poc.graphql.dev.vnplatform.com/graphql';
  const headers = {
    Authorization: apiToken,
    'Content-Type': 'application/json'
  };

  const requestBody = {
    query: `mutation CreateProfile($firstName: String!, $lastName: String!, $email: String!, $isVerified: Boolean!, $imageUrl: String!, $description: String!) {
    createProfile(
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
  }`,
    variables: profileData, // Assign profileData directly to the variables property
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return { ok: true, data: data };
  } catch (error) {
    return { ok: false, error: error.message };
  }
};
