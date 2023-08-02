import { createClient } from "@supabase/supabase-js";
import {Auth} from '@supabase/auth-ui-react';
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom";

const supabase = createClient(
    "https://tchlqesdfecbftilmkwa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaGxxZXNkZmVjYmZ0aWxta3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MTA4MjUsImV4cCI6MjAwNjM4NjgyNX0.ZUN_FQ34Niv1dNVhcWLgmO-SIp_tyYuGf3nZ1Pw9xVY"
    
);

function Login() {

    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == "SIGNED_IN") {
          navigate("/success");
      }
    });

    return (
      <div className="App">
        <header className="App-header">
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa}}
                theme="dark"
                providers={["discord", "google"]}
            />
        </header>
      </div>
    );
  }
  
  export default Login;