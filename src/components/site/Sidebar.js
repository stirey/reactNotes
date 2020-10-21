import React from 'react';
import {
    //These are imported from the React Router Dom
    Route, 
    Link, 
    Switch
}   from 'react-router-dom'
import Home from './Home'
import Resources from './Resources'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
    //We use Switch to wrap our Routes in because the Switch acts like a vanilla JS switch and iterates over the routers and only render the first one that match the current path name.
                <Switch>
    //This how we can set up an official Route. Exact limits the path that can match this route to only the words shown. **See more notes at bottom of code about Route..
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;



//********NOTES********* */
// Now, this is where react-router-dom is used even more. This component is how we set up where we want to go in our application and what we want to see. Our Routes determine what will be shown on the screen at that path, and our Links actually take us to that path (the path being the url seen in our browser)! So above if we use a Link to "/" or "/home" then we should see the <Home /> component. Same thing with <Resources /> and "/resources"! This is the whole way we can navigate to places in React! Our Switch acts just like a switch statement in vanilla. Only one of the conditions are true at one time, that way only one part of our application shows at a time!

// Thus, we have 3 <Link/>s to different paths: one for '/', one for '/functionalcomponent', and one for '/resources'. By clicking on any of these Links, we should observe a url change in our browser.  The <Switch/> will fire one of the three <Route/>s based upon matching the url in our browser with the path of the <Route/>.

//Exact limits the path that can match this route to only the words shown (remember that a 'path' is just the url you see in the browser--the path can either refer to the entire url 'http://localhost:3000/home' or just the part of the url after the base portion, '/home', in this case).So above, /home will take us to the Home component, but /home/3 will not. Without exact on the Route, /home/3, would also take us to the home

//Next, is path="/home". This is just saying that the path where this component should be shown is /home!

// One more important thing, notice how the component is declared between the open and closing Route tags. Ensure that there are no excess spaces in between the Routes as well, as this could cause it to break. Each Route has to have only one child component. So if you wanted multiple component in one route, you'd have to wrap them all in a div!