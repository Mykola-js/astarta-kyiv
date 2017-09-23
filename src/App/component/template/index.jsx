require('./../style/main.scss');


const Login_all = require('./../login/index.jsx');
const user_menu = require('./../json/config.json').menu;

const storage = require('./../events/storage.js');
const connect = ReactRedux.connect;
const Link = ReactRouterDOM.Link;

let one_name, two_name;

  // following a location.hash and send reload_hash()
window.addEventListener('hashchange',function () {
    
        if( location.hash =='#/bob' || location.hash =='#/alice'){
            
            reload_hash()
                
            } else {}
})

// recognizes the user and displays them slider 
// using ReactRedax function storage.dispatch
    function reload_hash() {

        if( location.hash =='#/bob' || location.hash =='#/alice'){
            
            for(let  i = 0, len = user_menu.length; i < len; i++){
                
                if(user_menu[i].allow.length === 1 && user_menu[i].allow == (location.hash).replace('#/','') ){
                    
                    one_name = user_menu[i].name;
                } else
                    if(user_menu[i].allow.length > 1){ 
                    
                        for(let j = 0, length = user_menu[i].allow.length; j < length; j++){

                                if( user_menu[i].allow[j] === (location.hash).replace('#/','') ){

                                    two_name = user_menu[i].name;
                                }
                        }
                    } else 
                        if(user_menu[i].allow.length > 2){
                            console.log('the argument is more than two')
                        } else {}
            }                   // ReactRedux
                                storage.dispatch({
                                    type: 'add_event',
                                    one_name:  one_name,
                                    two_name: two_name
                                })
                    } else {}
                    }
                    reload_hash()  
    


class template extends React.Component{
    // I set the initial state
    constructor(props){
        super(props);
        this.state = {
            check : false,
            severa : false,
            name_value: ''
            
        };
    }
    // function by pressing and changing className style
    // and displays the selected menu in #content_rigth_menu
    push_menu(e){

        if( e.target.id == 1 ){
            this.setState({
                check : true,
                severa : false,
                name_value : e.target.innerText
            })
        } else {
            this.setState({
                check : false,
                severa : true,
                name_value : e.target.innerText
            })
        }
      
    }
    
  
    render(){
       
        return (
            <div className = 'wraper'>
                <div className = 'header'>
                    <div className = 'div_arrow_back' >
                        <Link  to = '/login' >
                            <img className = 'arrow_back' src = 'https://img-fotki.yandex.ru/get/57551/200418627.15f/0_16efb1_3513b8fe_orig.png' />
                        </Link>
                    </div>
                    <input id = 'login_in' type = 'submit' value = {location.hash.replace('#/','Dear ')} />
                </div>
                <div className = 'content'>
                    <div className = 'content_left'>
                        <div className="swiper-container">   
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <h3  id = '1' onClick = {this.push_menu.bind(this)} className = {'name_one_' + this.state.check}>{one_name}</h3>
                                  <h3 id = '2' onClick = {this.push_menu.bind(this)} className = {'name_two_'+ this.state.severa}>{two_name}</h3>
                                </div>
                                <div className="swiper-slide">
                                    <h3 className = 'name_one_false' >{location.hash.replace('#/','Dear ')}</h3>
                                   
                                </div>
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    <div className = 'content_rigth'>
                        <h3 id = 'content_rigth_menu'>{'Item selected ' + this.state.name_value}</h3>
                    </div>
                </div>
            </div>
            )
    }
}
module.exports = connect(
    //I ask a story in ReactRedax
    //require('./../events/storage.js');
    function (state) {
       return{
           testStorage: state
       } 
    },
    function (dispatch) {
        return{} 
    }
)(template);