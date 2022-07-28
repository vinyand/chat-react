import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useLoginWithRedirect } from '@frontegg/react';
import '../Styling/styling.css';

function SignIn() {
  const { user, isAuthenticated } = useAuth();
  const [room, setRoom] = useState('');

  const loginWithRedirect = useLoginWithRedirect();

  return (
    <div>
      { isAuthenticated ? (
        <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <h1 className="heading">Entre no chat</h1>
            <div>
              <h2 className="heading">{user.name}</h2>
            </div>
            <div>
              <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link onClick={(e) => ((!user.name || !room) ? e.preventDefault() : null)} to={`/chat?name=${user.name}&room=${room}`}>
              <button className="button mt-20" type="submit">Entrar</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <button type="button" onClick={() => loginWithRedirect()}>Clique aqui para Entrar</button>
        </div>
      )}
    </div>
  );
}

export default SignIn;
