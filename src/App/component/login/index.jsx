require('./../style/login.scss');
const user_name = require('./../json/config.json').users;

class login extends React.Component{

    // I set the initial state
    constructor(props){
        super(props);
        this.state = {
            hash: '',
            name: 'Hello my dear friend'
  
        };
    }
    // validation checking and redirecting to the appropriate page
        login_submit(event){
            let self = this
            let array;
            event.preventDefault();
            
                switch ( document.getElementById('login_name').value ) {
                        case user_name[0]:
                                        
                            array = user_name[0]
                            break;
                        case user_name[1]:
                            
                            array = user_name[1]

                            break;
                        case user_name[2]: 
                            
                            array = user_name[2]
                            break;
                        default:
                        console.log('-')
                            break;
                }
                self.setState({
                    hash : '#/'+ array,
                    name: 'Such user does not exist'
                })
           //rewriting this and protection against re-dubbing  { array }
           
                     setTimeout(function () {
              if(self.state.hash !== '#/undefined'){
              location.hash= self.state.hash
              } else {}
          },0)
        }
   
    render(){
       
        return (
            <div className = 'login'>
                <h3 id = 'dear_friend'>{this.state.name}</h3>
                <div className = 'login_center'>
                    <input type = 'text' id = 'login_name' placeholder = 'login' />
                    <input type = 'text' id = 'login_password' placeholder = 'password' />
                    <input onClick = { this.login_submit.bind(this) } type = 'submit' id = 'login_submit' />
                </div>
            </div>)
    }
}
module.exports = login;