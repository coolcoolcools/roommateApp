import React from 'react';
import ReactDOM from 'react-dom';
import firebase, {auth, database, provider, dbRef} from "./firebase.js";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			user: null
		}
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}
    render() {
      return (
        <div>
          Hello
          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    }
    componentDidMount() {
    	auth.onAuthStateChange((user) => {
    		if (user) {
    			this.setState({
    				loggedIn: true,
	                user: user
	            	})
    			} else {
    				this.setState({
    					loggedIn: false,
    					user: null
    				})
    			}
    		});
    	}
	login() {
	    auth.signInWithPopup(provider)
	    
	        .then((result) => {
	            const user = result.user;
	            this.setState({
	                loggedIn: true,
	                user: user
	            });
	            console.log(user);
	        });
	}
	logout() {
	    auth.signOut()
	        .then(() => {
	            this.setState({
	                loggedIn: false,
	                user: null
	            });
	        });
	}

}



// 1. Home login screen (login button, google auth)

// 2. Add roommate button - modal pops up to add roommate name

// 3. Roommate component is rendered at the bottom of the page

// 4. List of available chores (illustrations) - dragable

// 5. Drag chores to roommate component - chore icon gets rendered uder roommate name

// 6. That chore is removed from main chore list and gray background image is exposed

// 7. Chore icon under roommate name has an "x" so that it can be removed

// 8. Chore then gets added back in to main chore list 


// Chores: sweep/vaccum, bathroom, kitchen, dust, mop, trash/recycling, pets, laundry, fridge, outdoor, empties🍺, watering plants, groceries




// Nice to haves: 
//Facebook login option as well
//Choose avatar in addition to entering name on new roommate modal

ReactDOM.render(<App />, document.getElementById('app'));
