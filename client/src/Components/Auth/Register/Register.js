import React from 'react';
import { Link } from 'react-router-dom';
import { validate } from './validation';
import { Form, Field } from 'react-final-form'


const Register = (props) => {

	const renderInput = ({input, meta, type, placeholder}) =>
		<div className="form-group">
			<input placeholder={placeholder} className={`form-control ${meta.touched && meta.invalid ? 'border-danger' : ''}`} type={type} {...input}/>
			{ meta.dirty && meta.invalid && <div className="invalid-feedback d-block text-left">{meta.error}</div>}
			{ !meta.dirty && meta.touched && <div className="invalid-feedback d-block text-left">Cannot be empty</div>}
		</div>

    const onSubmit = (values) => {
		console.log(values);
	}

	return (
		<div className="register">
			<Form onSubmit={onSubmit} validate={validate}>
				{({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
					<Field name="username" placeholder="username" type="text" component={renderInput}/>
					<Field placeholder="email" type="email" name="email" component={renderInput}/>
					<Field placeholder="password" type="password" name="password" component={renderInput}/>
					<div className="position-relative form-group mt-5">
						<button type="submit" disabled={submitting} className="btn register-btn btn-lg w-50">Register</button>
					</div>
					<div className="position-relative form-group mt-5 pb-5 text-center">
						<label>Already a chatty member? <Link to="/login">Login</Link></label>
					</div>
				</form>}
			</Form>	
		</div>
	);
}

export default Register;