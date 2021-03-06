import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import chat from "../lib/chat";
import spinner from "../logo.svg";
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       isAuthenticated: false,
//       user: null,
//       isSubmitting: false,
//       errorMessage: ""
//     };
//   }

function Login(props){
   const [userName,setUsername] = useState('')
   const [isAuthenticated,setisAuthenticated] = useState(false)
   const [user,setUser] = useState(null)
   const [isSubmitting,setisSubmitting] = useState(false)
   const [errorMessage,seterrorMessage] = useState("")

   //that's when I want to change the value
   // setUsername()


  const onSubmit = eventObject => {
    // this is reveference to the username
     // if (this.state.username !== "")
     // what's event.target mdn]
     // eventObject.target is the form element

    if (userName !== "") {
      eventObject.preventDefault();
      login();
    }
  };

  const login = () => {
    toggleIsSubmitting();
    chat.login(e.target.username)
    .then(user => {
      // this.setState({
      //   user,
      //   isAuthenticated: true
      // });
      setisSubmitting(true)
      setUser(null)

    })
    .catch(error => {
      seterrorMessage( "Please enter a valid username")
      // this.setState({
      //   errorMessage: "Please enter a valid username"
      // });
      this.toggleIsSubmitting();
      console.log(error);
    });
  };
  const toggleIsSubmitting = () => {
    // this.setState(prevState => ({
    //   isSubmitting: !prevState.isSubmitting
    // }));
    setisSubmitting(false)
  };
  const handleInputChange = e => {
    // this.setState({
    //   username: e.target.value
    // });
    setUsername(e.target.value);
  };
  // render() {

      if(isAuthenticated){
      return (
        <div>
        <Redirect
          to={{
            pathname: "/chat",
            state: { user: this.state.user }
          }}
        />
        </div>
      );

    };
    return (
      <div className="App">
        <h1>COMETCHAT</h1>
        <p>Create an account through your CometChat dashboard or login with one of our test users, superhero1, superhero2, etc.</p>
        <form className="form" onSubmit={this.onSubmit}>
          <input onChange={this.handleInputChange} type="text" />
          <span className="error">{this.state.errorMessage}</span>
          {this.state.isSubmitting ? (
            <img src={spinner} alt="Spinner component" className="App-logo" />
          ) : (
            <input
              type="submit"
              disabled={userName === ""}
              value="LOGIN"
            />
          )}
        </form>
      </div>
    );
  };
// }
export default Login;
