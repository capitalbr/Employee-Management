export const createTrainingEvent = (training_event) => {
  return ($.ajax({
    method: "POST",
    url: "/api/training_events",
    data: { training_event }
  }))
}

export const updateTrainingEvent = (training_event) => {
  return ($.ajax({
    method: "PATCH",
    url: `/api/training_events/${training_event.id}`,
    data: { training_event }
  }))
}

export const getTrainingEvent = (id) => {
  return($.ajax({
    method: "GET",
    url: `/api/training_events/${id}`
  }))
}

export const getTrainingEvents = (query) => {
  return($.ajax({
    method: "GET",
    url: '/api/training_events/',
    data: { training_event: query }
  }))
}