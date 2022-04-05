import PageContainer from 'components/PageContainer'
import { Paragraph, Title } from 'components/Text/Text-Elements'
import emailjs from 'emailjs-com'
import { FC, useState } from 'react'

import { Button, FormContainer, Input, InputWrapper, TextArea } from './Contact-Elements'

const Contact: FC = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const submitEmail = (event: React.MouseEvent): void => {
		event.preventDefault()

		if (!name || !email || !message) return

		const serviceId = 'Email'
		const templateId = 'Website Contact'
		const userId = 'emnfZ7zcCT30MPtwm'
		const templateParams = {
			name,
			email,
			message
		}

		emailjs.send(serviceId, templateId, templateParams, userId)
			.then(response => console.log(response))
			.then(error => console.error(error))

		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<PageContainer>
			<Title>Contact</Title>
			<Paragraph>Currently looking for employment</Paragraph>

			<FormContainer>
				<InputWrapper area='email'>
					<Input type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
				</InputWrapper>
				<InputWrapper area='name'>
					<Input type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)} />
				</InputWrapper>
				<InputWrapper area='message'>
					<TextArea placeholder='Message' value={message} onChange={event => setMessage(event.target.value)} />
				</InputWrapper>
				<Button onClick={submitEmail}>Submit</Button>
			</FormContainer>
		</PageContainer>
	)
}

export default Contact