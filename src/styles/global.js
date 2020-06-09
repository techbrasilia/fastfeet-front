import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	  }

	  html, body, #root {
		min-height: 100%;
	  }

	  body {
		background: #7159c1;
		-webkit-font-smoothing: antialiased !important;
	  }

	  body, input, button {
        font: 14px Roboto, sans-serif;
		color: #222;
		font-family: Arial, Helvetica, sans-serif;
	  }

	  button {
		cursor: pointer;
	  }
	`;
