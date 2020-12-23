import { useHistory } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";

const redirect = (history) => {
    history.push("/admin");
  };

export default {
    async handleSignIn(e, user, history) {
        e.preventDefault();
        try {
            const amplifyUser = await Auth.signIn(user.email, user.password);
            console.log(amplifyUser);
            redirect(history);
        } catch (error) {
            console.log("error signing in", error);
        }
    },

    async handleSignup(event, user, history) {
        // event.preventDefault();
        try {
            const amplifyUser = await Auth.signUp({
                username: user.email,
                password: user.password,
                attributes: {
                    email: user.email, // optional
                    //phone_number: 1234314,   // optional - E.164 number convention
                    // other custom attributes
                },
            }).user;
            redirect(history);
            console.log("##########");
            console.log(amplifyUser);
        } catch (error) {
            console.log("error signing up:", error);
        }
    },

    async handleGoogleSignIn(event) {
        try {
            console.log("clicked");
            const amplifyUser = await Auth.federatedSignIn({ provider: "Google" });
            /* const amplifyUser = await Auth.signUp({
              username: user.email,
              password: user.password,
              attributes: {
                email: user.email, // optional
                //phone_number: 1234314,   // optional - E.164 number convention
                // other custom attributes
              },
            }).user;
            redirect(); */
            //checkUser();
            console.log("##########");
            console.log(amplifyUser);
            //redirect();
        } catch (error) {
            console.log("error signing up:", error);
        }
    },

    async handleFacebookSigIn(event) {
        try {
            console.log("clicked");
            const amplifyUser = await Auth.federatedSignIn({ provider: "Facebook" });
            console.log("######");
            console.log(amplifyUser);
        } catch (error) {
            console.log(error);
        }
    }
}
