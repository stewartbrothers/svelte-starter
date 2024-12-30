<a class="gsi-material-button" href="/auth/facebook">
	<div class="gsi-material-button-state"></div>
	<div class="gsi-material-button-content-wrapper">
		<div class="gsi-material-button-icon">
			<svg
				viewBox="0 0 36 36"
				class="x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq xfx01vb"
				style="--color:var(--fb-logo)"
				fill="currentColor"
				height="40"
				width="40"
				><path
					d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"
				></path><path
					class="xe3v8dz"
					d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
				></path></svg
			>
		</div>
		<span class="gsi-material-button-contents">Sign in with Facebook</span>
		<span style="display: none;">Sign in with Facebook</span>
	</div>
</a>

<style>
	.gsi-material-button {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		-webkit-appearance: none;
		background-color: WHITE;
		background-image: none;
		border: 1px solid #747775;
		-webkit-border-radius: 20px;
		border-radius: 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #1f1f1f;
		cursor: pointer;
		font-family: 'Roboto', arial, sans-serif;
		font-size: 14px;
		height: 40px;
		letter-spacing: 0.25px;
		outline: none;
		overflow: hidden;
		padding: 0 12px;
		position: relative;
		text-align: center;
		-webkit-transition:
			background-color 0.218s,
			border-color 0.218s,
			box-shadow 0.218s;
		transition:
			background-color 0.218s,
			border-color 0.218s,
			box-shadow 0.218s;
		vertical-align: middle;
		white-space: nowrap;
		width: auto;
		max-width: 400px;
		min-width: min-content;
	}

	.gsi-material-button .gsi-material-button-icon {
		height: 20px;
		margin-right: 12px;
		min-width: 20px;
		width: 20px;
	}

	.gsi-material-button .gsi-material-button-content-wrapper {
		-webkit-align-items: center;
		align-items: center;
		display: flex;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-flex-wrap: nowrap;
		flex-wrap: nowrap;
		height: 100%;
		justify-content: space-between;
		position: relative;
		width: 100%;
	}

	.gsi-material-button .gsi-material-button-contents {
		-webkit-flex-grow: 1;
		flex-grow: 1;
		font-family: 'Roboto', arial, sans-serif;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: top;
	}

	.gsi-material-button .gsi-material-button-state {
		-webkit-transition: opacity 0.218s;
		transition: opacity 0.218s;
		bottom: 0;
		left: 0;
		opacity: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.gsi-material-button:disabled {
		cursor: default;
		background-color: #ffffff61;
		border-color: #1f1f1f1f;
	}

	.gsi-material-button:disabled .gsi-material-button-contents {
		opacity: 38%;
	}

	.gsi-material-button:disabled .gsi-material-button-icon {
		opacity: 38%;
	}

	.gsi-material-button:not(:disabled):active .gsi-material-button-state,
	.gsi-material-button:not(:disabled):focus .gsi-material-button-state {
		background-color: #303030;
		opacity: 12%;
	}

	.gsi-material-button:not(:disabled):hover {
		-webkit-box-shadow:
			0 1px 2px 0 rgba(60, 64, 67, 0.3),
			0 1px 3px 1px rgba(60, 64, 67, 0.15);
		box-shadow:
			0 1px 2px 0 rgba(60, 64, 67, 0.3),
			0 1px 3px 1px rgba(60, 64, 67, 0.15);
	}

	.gsi-material-button:not(:disabled):hover .gsi-material-button-state {
		background-color: #303030;
		opacity: 8%;
	}
</style>
