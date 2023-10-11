import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
	const [msg, setMsg] = useState('Think of a question...');
	const [msgColor, setMsgColor] = useState('black');
	const [goodResponses, setGoodRes] = useState(0);
	const [badResponses, setBadRes] = useState(0);
	const [unsureResponses, setUnsureRes] = useState(0);
	const handleClick = () => {
		const rand = Math.floor(Math.random() * answers.length);
		setMsg(answers[rand].msg);
		setMsgColor(answers[rand].color);
		switch (answers[rand].color) {
			case 'green':
				setGoodRes(goodResponses + 1);
				break;
			case 'goldenrod':
				setUnsureRes(unsureResponses + 1);
				break;
			case 'red':
				setBadRes(badResponses + 1);
				break;
		}
	};
	const reset = () => {
		setMsg('Think of a question...');
		setMsgColor('black');
		setGoodRes(0);
		setBadRes(0);
		setUnsureRes(0);
	};

	return (
		<>
			<div className="EightBall" onClick={handleClick}>
				<div className="EightBall-message-container" style={{ backgroundColor: msgColor }}>
					<p className="EightBall-message">{msg}</p>
				</div>
			</div>

			<p className="EightBall-tracking">
				Good Responses: {goodResponses}
				<br />
				Bad Responses: {badResponses}
				<br />
				Unsure Responses: {unsureResponses}
			</p>

			<button className="EightBall-reset" onClick={reset}>
				Reset
			</button>
		</>
	);
};

EightBall.defaultProps = {
	answers: [
		{ msg: 'It is certain.', color: 'green' },
		{ msg: 'It is decidedly so.', color: 'green' },
		{ msg: 'Without a doubt.', color: 'green' },
		{ msg: 'Yes - definitely.', color: 'green' },
		{ msg: 'You may rely on it.', color: 'green' },
		{ msg: 'As I see it, yes.', color: 'green' },
		{ msg: 'Most likely.', color: 'green' },
		{ msg: 'Outlook good.', color: 'green' },
		{ msg: 'Yes.', color: 'green' },
		{ msg: 'Signs point to yes.', color: 'goldenrod' },
		{ msg: 'Reply hazy, try again.', color: 'goldenrod' },
		{ msg: 'Ask again later.', color: 'goldenrod' },
		{ msg: 'Better not tell you now.', color: 'goldenrod' },
		{ msg: 'Cannot predict now.', color: 'goldenrod' },
		{ msg: 'Concentrate and ask again.', color: 'goldenrod' },
		{ msg: "Don't count on it.", color: 'red' },
		{ msg: 'My reply is no.', color: 'red' },
		{ msg: 'My sources say no.', color: 'red' },
		{ msg: 'Outlook not so good.', color: 'red' },
		{ msg: 'Very doubtful.', color: 'red' },
	],
};

export default EightBall;
