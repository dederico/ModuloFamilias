import React, { useState } from "react";
// amplify
import { Auth, API, graphqlOperation } from "aws-amplify";
// utilities
import { FormGroup, Input, Label } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { createUser } from "../../graphql/mutations";
import "./AuthStyles.scss";

const CreateAccount = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const handleOnChange = (e, func) => {
    const value = e.currentTarget.value;
    func(value);
  };

  const createAccount = async () => {
    try {
      setAlert("Creating account");
      const auth = await Auth.signUp({
        username: username,
        password: password,
        email: email,
      });
      const userId = auth.userSub;
      await API.graphql(
        graphqlOperation(createUser, {
          input: { id: userId, email: email },
        })
      );
      setAlert("User created successfully");
      history.push("/confirm-account");
    } catch (error) {
      setAlert(error.message);
    }
  };

  return (
    <div className="flex-center auth">
      <div>
        <h1 className="text-center">Create an account with mobter</h1>
        <h2 className="text-center">And take control of your calls</h2>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="user"
            placeholder="Insert username"
            onChange={(e) => handleOnChange(e, setUsername)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Insert your email"
            onChange={(e) => handleOnChange(e, setEmail)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Insert your password"
            onChange={(e) => handleOnChange(e, setPassword)}
          />
        </FormGroup>
        <button className="btn btn-primary btn-block" onClick={createAccount}>
          Create account
        </button>
        {alert && <small>{alert}</small>}
        <Link to="/login" className="link-auth">
          Already have an account? Log In
        </Link>
      </div>
    </div>
  );
};

export default withRouter(CreateAccount);
