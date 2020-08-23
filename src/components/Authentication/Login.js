import React, { useState } from 'react';
import './Login.css';
import { useAuth } from './useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [returningUser, setReturningUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = useAuth();

    const onSubmit = data => {
        if (returningUser) {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password);
            }
        } else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.email, data.confirm_password, data.name)
            }
        }

    }

    return (
        <div className="sign-up">
            <div className="container">
                <div className="text-center py-4">
                    <Link to="/" class="text-info nav-link">
                        <h2>Resume Builder</h2>
                    </Link>
                </div>
                {
                    returningUser ?

                        <form onSubmit={handleSubmit(onSubmit)} className="py-3">

                            <h1 className='lead text-center py-3'>Welcome back!</h1>
                            {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            }

                            <div className="form-group">
                                <input
                                    name="email"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    placeholder="Email"
                                />
                                {
                                    errors.email && <span className="error">Email is required</span>
                                }
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    placeholder="Password"
                                />
                                {
                                    errors.password && <span className="error">Password is required</span>
                                }
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>

                            <div className='text-center my-0'>
                                <label> or </label>
                            </div>

                            <button
                                className='btn btn-success  btn-block'
                                onClick={auth.signInWithGoogle}
                            >
                                Sign in with Google
                             </button>
                            <div className="option text-center my-3">
                                <label
                                    onClick={() => setReturningUser(false)}
                                >
                                    Create a new Account
                                     </label>
                            </div>
                        </form>

                        :

                        <form onSubmit={handleSubmit(onSubmit)} className="py-2">

                            {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            }

                            <div className="form-group">
                                <input
                                    name="name"
                                    className="form-control"
                                    ref={register({
                                        required: "Name is required",
                                        pattern: {
                                            value: /^(?=^.{6,20}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/i,
                                            message: "Name must be 6 - 20 characters & Minimum 2 words"
                                        }
                                    })}
                                    placeholder="Name"
                                />
                                <span className="error">
                                    {errors.name && errors.name.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <input
                                    name="email"
                                    className="form-control"
                                    ref={register({
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    placeholder="Email"
                                />
                                <span className="error">
                                    {errors.email && errors.email.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    ref={register({
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&;:])[A-Za-z\d@$!%*#?&;:]{8,}$/i,
                                            message: "Minimum eight characters, at least one letter, one number and one special character"
                                        }
                                    })}
                                    placeholder="Password"
                                />
                                <span className="error">
                                    {errors.password && errors.password.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    className="form-control"
                                    ref={register({
                                        validate: (value) => value === watch('password')
                                    })}
                                    placeholder="Confirm Password"
                                />
                                {
                                    errors.confirm_password && <span className="error">Passwords don't match.</span>
                                }
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className="option text-center my-3">
                                <label
                                    onClick={() => setReturningUser(true)}
                                >
                                    Already Have an Account
                                </label>
                            </div>
                        </form>
                }
            </div>
        </div>
    );
};

export default SignUp;