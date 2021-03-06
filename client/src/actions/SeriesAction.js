import axios from 'axios';

export function getSeries() {
  return function(dispatch) {
    axios.get('/series')
    .then(function(response) {
      dispatch({type:"GET_SERIES", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_SERIES_REJECTED", payload:err})
    })
  }
}

export function postNhlSeries(series) {
  return function(dispatch) {
    axios.post('/series', series)
    .then(function(response) {
      dispatch({type:"POST_NHL_SERIES", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_NHL_SERIES_REJECTED", payload:err})
    })
  }
}

export function updateSeries(id, newData) {
  return function(dispatch) {
    axios.put('/series/' + id, newData)
    .then(function(response) {
      dispatch({type:"UPDATE_SERIES", payload:response.data, id:id, datas:newData})
    })
    .catch(function(err) {
      dispatch({type:"UPDATE_SERIES_REJECTED", payload:err})
    })
  }
}

export function postSeries(vote) {
  return function(dispatch) {
    axios.post('/voteseries', vote)
    .then(function(response) {
      dispatch({type:"POST_SERIES", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"POST_SERIES_REJECTED", payload:err})
    })
  }
}

export function getAllUserSeries() {
  return function(dispatch) {
    axios.get('/voteseries')
    .then(function(response) {
      dispatch({type:"GET_ALL_USER_SERIES_VOTE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_ALL_USER_SERIES_VOTE_REJECTED", payload:err})
    })
  }
}

export function getUserSeries(id) {
  return function(dispatch) {
    axios.get('/voteseries/' + id)
    .then(function(response) {
      dispatch({type:"GET_USER_SERIES_VOTE", payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:"GET_USER_SERIES_VOTE_REJECTED", payload:err})
    })
  }
}
