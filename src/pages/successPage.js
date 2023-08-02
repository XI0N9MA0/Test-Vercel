import { createClient } from "@supabase/supabase-js";
import {Auth} from '@supabase/auth-ui-react';
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState} from 'react';
import Header from "../components/Header"
import Meme from "../components/Meme"

const supabase = createClient(
    "https://tchlqesdfecbftilmkwa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaGxxZXNkZmVjYmZ0aWxta3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MTA4MjUsImV4cCI6MjAwNjM4NjgyNX0.ZUN_FQ34Niv1dNVhcWLgmO-SIp_tyYuGf3nZ1Pw9xVY"
    
);




function Success() {
	const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
    		await supabase.auth.getUser().then((value) => {
			//value.data.user
				if(value.data?.user){
					console.log(value.data.user);
					setUser(value.data.user);
				}
        	})
        }
		getUserData();
    }, []);

	async function signOutUser(){
		const { error } = await supabase.auth.signOut();
		navigate("/");
	}

    return (
		<div className="App">
			<header className="App-header">
				{Object.keys(user).length !== 0 ?
					<>
						<Header/>
						<Meme/>
						<button className="signOut--btn" onClick={()=> signOutUser()}>Sign Out</button>
					</>
					:
					<>
						<h1>User is not logged in</h1>
						<button onClick={()=>{navigate("/")}}>Go back home!</button>
					</>
				}
				
			</header>
      	</div>
    );
  }
  
export default Success;