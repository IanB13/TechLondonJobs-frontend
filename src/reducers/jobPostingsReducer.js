
const jobPostingReducer = (state = [], action) => {
    switch(action.type) {
      case 'INIT_JOBPOSTINGS':
        const jobPostings = action.data
        console.log("job posting in reducer")
        console.log(jobPostings)
        return jobPostings
      default:
        return state
    }
  }
  
  
  export default jobPostingReducer