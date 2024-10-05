import axios from 'axios';
import {REACT_APP_API_URL} from '@env';

const getAppData = async () => {
  try {
    const response = await await axios.post(
      `${REACT_APP_API_URL}?kid_id=378`,
    );
    return response.data?.data?.app_list;
  } catch (error) {
    console.error('Error fetching apps:', error);
    throw error;
  }
};
export {getAppData};
