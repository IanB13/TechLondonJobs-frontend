import APIRequest from '../services/APIRequest';

//thunk middleware allows async return 
export const initializeJobPostings = () => {
    return async dispatch => {
        const jobPostings = await APIRequest.getJobLinks();
        dispatch({
            type: 'INIT_JOBPOSTINGS',
            data: jobPostings,
        })
    }
}