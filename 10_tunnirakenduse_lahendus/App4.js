import { useRef } from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App4() {

  const pealkiriRef = useRef();
  const sisuRef = useRef();
	function lisa(){
		fetch("/article/"+pealkiriRef.value+"/"+sisuRef.value).then(d => d.text()).then(console.log);
	}
  return (
    <div>
      <input ref={pealkiriRef} />
      <input ref={sisuRef} />
	  <input type="button" value="lisa" onClick={() => lisa()} />
	</div>
  );
}

export default App4;