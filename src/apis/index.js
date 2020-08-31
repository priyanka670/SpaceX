import  axios from 'axios';

const api = axios.create({
    baseURL:`https://api.spaceXdata.com/v3/launches?limit=100`
})
export const allDatas = () =>{
    return api.get()
        .then((response) => {   
     // handle success
    //  console.log(response);
    //it will update the state of space data. previously it was empty state then state is fetched from backend.
        return (response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}
export const datasByYear = (year) =>{
   return api.get(`&launch_year=${year}`)
      .then((response) => {   
       return response.data;
      })
}
export const datasByLaunch = (launch) =>{
    return api.get(`&launch_success=${launch}`)
       .then((response) => {   
        return response.data;
       })
 }
 export const datasByLand = (land) =>{
    return api.get(`&land_success=${land}`)
       .then((response) => {   
        return response.data;
       })
 }
 export const datasBylaunchAndLand = (launch, land) =>{
    return api.get(`&launch_success=${launch}&land_success=${land}`)
       .then((response) => {   
        return response.data;
       })
 }
 export const datasByLaunchAndYear = (year,launch) =>{
    return api.get(`&launch_success=${launch}&launch_year=${year}`)
       .then((response) => {   
        return response.data;
       })
 }
 export const datasByLandAndYear = (year,land) =>{
    return api.get(`&land_success=${land}&launch_year=${year}`)
       .then((response) => {   
        return response.data;
       })
 }
 export const datasByAllFilters = (year,launch, land) =>{
    return api.get(`&launch_success=${launch}&land_success=${land}&launch_year=${year}`)
       .then((response) => {   
        return response.data;
       })
 }
