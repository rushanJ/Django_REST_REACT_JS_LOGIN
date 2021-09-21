const axios = require('axios');
export const loadLecturers =(data)=>{
    axios.get('http://192.168.8.101:3005/lecturer')
       .then(response => {
          const data = response.data;
            this.setState ({data});
            this.setState ({isLoaded:true});
            })
       .catch(exception => {
         //console.log(exception);
         this.setState({...this.state, isFetching: false});
       });
//console.log(this.state.data);
  }