const apiToken = process.env.REACT_APP_API_TOKEN;

export const deleteProfileApi = async (profileId) => {
  const apiUrl = 'https://api.poc.graphql.dev.vnplatform.com/graphql';

  const headers = {
    Authorization: apiToken,
    'Content-Type': 'application/json',
  };

  const body = {
    query: 'mutation DeleteProfile($deleteProfileId: String!) {\n  deleteProfile(id: $deleteProfileId)\n}',
    variables: {
      deleteProfileId: profileId,
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const deletedProfileId = data.data.deleteProfile;
    console.log('Deleted profile ID:', deletedProfileId);
  } catch (error) {
    console.error('Error deleting profile:', error);
  }
};
