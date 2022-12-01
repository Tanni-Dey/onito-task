import React, { useState } from 'react';
import { Formik, Field } from 'formik';


const TaskForm = () => {
    const [users, setUsers] = useState([])
    const [allU, setAllU] = useState([])


    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.searchUser.value;
        // setU([...users])
        if (search === '' || search === ' ') {
            setUsers([...allU])
        } else {
            const newUser = allU.find(user => user.name === search);
            const allUser = [];
            const newU = [...allUser, newUser];
            setUsers(newU)
        }

    }

    return (
        <div>
            <h3>Task Form</h3>
            <Formik
                initialValues={{ name: '', birth: '', sex: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please Enter Name';
                    }
                    if (!values.birth) {
                        errors.birth = 'Please Enter Birth Date';
                    }
                    if (!values.sex) {
                        errors.sex = 'Please Enter Sex';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const newUser = [...users, values]
                    setUsers(newUser)
                    setAllU(newUser)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form className='text-start bg-light p-5 rounded-2 ' onSubmit={handleSubmit}>
                        <u><h5 className='text-start mb-3'>Personal Details</h5></u>
                        <div className='row mb-3'>
                            <div className="col-sm-3 row">
                                <label className='col-sm-3 col-form-label' htmlFor="name">Name<span className='text-danger'>*</span></label>
                                <div className='col-sm-9'>
                                    <input
                                        id='name'
                                        className='rounded-1 form-control'
                                        placeholder='Enter Name'
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <p className='text-danger'>{errors.name && touched.name && errors.name}</p>
                                </div>
                            </div>
                            <div className='col-sm-6 row text-start'>
                                <label className='col-sm-3 col-form-label' htmlFor="birth">Date of Birth or Age<span className='text-danger'>*</span></label>
                                <div className='col-sm-8'>
                                    <input
                                        id='birth'
                                        className='form-control'
                                        placeholder='DD/MM/YYYY or Age in Years'
                                        type="text"
                                        name="birth"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.birth}
                                    />
                                    <p className='text-danger'>{errors.birth && touched.birth && errors.birth}</p>
                                </div>
                            </div>
                            <div className='row col-sm-3'>

                                <label className='col-sm-2' htmlFor="sex">Sex<span className='text-danger'>*</span></label>
                                <div className=' col-sm-10'>
                                    <Field className='form-select' placeholder='Enter Sex' id='sex' as="select" name="sex">
                                        <option value="" disabled selected>Enter Sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="common">Common</option>
                                    </Field>
                                    <p className='text-danger'>{errors.sex && touched.sex && errors.sex}</p>
                                </div>

                            </div>
                        </div>

                        <div className='row mb-3'>
                            <div className='row col-sm-4'>
                                <label className='col-sm-2' htmlFor="mobile">Mobile</label>
                                <div className='col-sm-10'>
                                    <input
                                        id='mobile'
                                        placeholder='Enter Mobile'
                                        className='form-control'
                                        type="number"
                                        name="mobile"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobile}
                                    />
                                </div>
                            </div>
                            <div className='row col-sm-8'>
                                <label className='col-sm-2' htmlFor="">Govt Issued ID</label>
                                <div className='col-sm-4'>
                                    <Field className='form-select' as="select" name="idType">
                                        <option value="" disabled selected >Enter Card</option>
                                        <option value="aCard">Aadhaar Card</option>
                                        <option value="vCard">Voter ID Card</option>
                                        <option value="pCard">PAN Card</option>
                                    </Field>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type="number"
                                        placeholder='Enter Govt ID'
                                        className='form-control'
                                        name="id"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.id}
                                    />
                                </div>
                            </div>
                        </div>

                        <u><h5 className='text-start mb-3'>Contact Details</h5></u>
                        <div className='row mb-3'>
                            <div className='row col-md-5'>
                                <label className='col-sm-3' htmlFor="gardian">Gardian Details</label>
                                <div className='col-sm-3'>
                                    <Field className='form-select' id='gardian' as="select" name="gardian">
                                        <option value="" disabled selected >Enter Label</option>
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="brother">Brother</option>
                                    </Field>
                                </div>
                                <div className='col-sm-5'>
                                    <input
                                        type="text"
                                        name="gardianName"
                                        placeholder='Enter Gardian Name'
                                        className='form-control'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gardianName}
                                    />
                                </div>
                            </div>
                            <div className='row col-sm-3'>
                                <label className='col-sm-2' htmlFor="email">Email</label>
                                <div className='col-sm-10'>
                                    <input
                                        id='email'
                                        type="email"
                                        name="email"
                                        className='form-control'
                                        placeholder='Enter Your Email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                            </div>
                            <div className='row col-sm-4'>
                                <label className='col-sm-5' htmlFor="contactNumber">Emergency Contact Number</label>
                                <div className='col-sm-7'>
                                    <input
                                        type="number"
                                        name="contactNumber"
                                        className='form-control'
                                        placeholder='Enter Emergancy No.'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.contactNumber}
                                    />
                                </div>
                            </div>
                        </div>

                        <u><h5 className='text-start mb-3'>Address Details</h5></u>
                        <div className='row mb-3'>
                            <div className='row col-sm-5'>
                                <label className='col-sm-2' htmlFor="address">Address</label>
                                <div className='col-sm-10'>
                                    <input
                                        id='address'
                                        type="text"
                                        placeholder='Enter Address'
                                        className='form-control'
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    />
                                    {errors.address && touched.address && errors.address}
                                </div>
                            </div>
                            <div className='row col-sm-3'>
                                <label className='col-sm-2' htmlFor="state">State</label>
                                <div className='col-sm-10'>
                                    <Field className='form-select' id='state' as="select" name="state">
                                        <option value="" disabled selected>Enter State</option>
                                        <option value="india">India</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="usa">USA</option>
                                    </Field>
                                </div>
                            </div>
                            <div className='row col-sm-4'>
                                <label className='col-sm-2' htmlFor="city">City</label>
                                <div className='col-sm-10'>
                                    <Field className='form-select' id='city' as="select" name="city">
                                        <option value="" disabled selected>Enter City</option>
                                        <option value="dellhi">Dellhi</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="newyork">New Tork</option>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='row col-sm-4'>
                                <label className='col-sm-2' htmlFor="country">Country</label>
                                <div className='col-sm-10'>
                                    <input className='form-control' name='country' placeholder='Enter Country' list="country" />

                                    <datalist id="country">
                                        <option value="India" />
                                        <option value="Bangladesh" />
                                        <option value="USA" />
                                        <option value="UK" />
                                        <option value="China" />
                                    </datalist>
                                </div>
                            </div>
                            <div className='row col-sm-4'>
                                <label className='col-sm-2' htmlFor="pincode">Pincode</label>
                                <div className='col-sm-10'>
                                    <input
                                        id='pincode'
                                        type="text"
                                        name="pincode"
                                        placeholder='Enter Pincode'
                                        className='form-control'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.pincode}
                                    />
                                    {errors.pincode && touched.pincode && errors.pincode}
                                </div>
                            </div>
                        </div>

                        <u><h5 className='text-start mb-3'>Address Details</h5></u>
                        <div className='row mb-3'>
                            <div className='row col-sm-3'>
                                <label className='col-sm-4' htmlFor="occupation">Occupation</label>
                                <div className='col-sm-8'>
                                    <input
                                        id='occupation'
                                        type="text"
                                        name="occupation"
                                        className='form-control'
                                        placeholder='Enter Occupation'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.occupation}
                                    />
                                    {errors.occupation && touched.occupation && errors.occupation}
                                </div>
                            </div>
                            <div className='row col-sm-3'>
                                <label className='col-sm-3' htmlFor="religion">Religion</label>
                                <div className='col-sm-9'>
                                    <Field className='form-select' id='religion' as="select" name="religion">
                                        <option value="" disabled selected>Enter Religion</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="muslim">Muslim</option>
                                        <option value="buddha">Buddha</option>
                                        <option value="kristan">Kristan</option>
                                    </Field>
                                </div>
                            </div>
                            <div className='row col-sm-3'>
                                <label className='col-sm-3' htmlFor="merital">Merital Status</label>
                                <div className='col-sm-9'>
                                    <Field className='form-select' id='merital' as="select" name="merital">
                                        <option value="" disabled selected>Enter Merital Status</option>
                                        <option value="married">Married</option>
                                        <option value="unmarried">Unmarried</option>
                                    </Field>
                                </div>

                            </div>
                            <div className='row col-sm-3'>
                                <label className='col-sm-3' htmlFor="blood">Blood Group</label>
                                <div className='col-sm-9'>
                                    <Field className='form-select' id='blood' as="select" name="blood">
                                        <option value="" disabled selected>Enter Blood Group</option>
                                        <option value="oPositive">O+</option>
                                        <option value="aPositive">A+</option>
                                        <option value="bPositive">B+</option>
                                        <option value="abPositive">AB+</option>
                                        <option value="oNegative">O-</option>
                                        <option value="aNegative">A-</option>
                                        <option value="bNegative">B-</option>
                                        <option value="abNegative">AB-</option>
                                    </Field>
                                </div>

                            </div>
                            <div className='row col-sm-4'>
                                <label className='col-sm-3' htmlFor="nationality">Nationality</label>
                                <div className='col-sm-9'>
                                    <input name='nationality' placeholder='Nationality' list="nationality" />

                                    <datalist name='n' id="nationality">
                                        <option value="India" />
                                        <option value="Bangladesh" />
                                        <option value="USA" />
                                        <option value="UK" />
                                        <option value="China" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className='text-end me-3'>
                            <button className='btn btn-danger mt-3' >
                                Cancel
                            </button>
                            <button className='btn btn-success mt-3 ms-3 me-3' type="submit" >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>

            <form action="" onSubmit={handleSearch}>
                <input type="text" name='searchUser' />
                <input type="submit" value="search" />
            </form>

            <div className='mt-5'>
                {
                    users.length === 0 ? '' : <table class="table table-primary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Address</th>
                                <th scope="col">Date of Birth</th>
                                <th scope="col">Marital Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={index}>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.mobile}</td>
                                        <td>{user?.address}</td>
                                        <td>{user?.birth}</td>
                                        <td>{user?.maritral}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default TaskForm;