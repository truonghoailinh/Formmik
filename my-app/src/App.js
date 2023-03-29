import './App.css';
import { useFormik } from 'formik' 
import * as Yup from 'yup'
function App() {
  const validateSchame = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phone: Yup.string()
    .min(10, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must match')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validateSchame,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="App container">
      <h1>Form React</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-3">
          <input type="text"
            className="form-control"
            placeholder="name"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <p className="link-danger error text-left">{formik.errors.name}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <input type="email"
            className="form-control"
            placeholder="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <p className="link-danger error text-left">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <input type="number"
            className="form-control"
            placeholder="phone"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
           {formik.errors.phone && (
            <p className="link-danger error text-left">{formik.errors.phone}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <input type="password"
            className="form-control"
            placeholder="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <p className="link-danger error text-left">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <input type="password"
            className="form-control"
            placeholder="password confirm"
            name="confirmPassword"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && (
            <p className="link-danger error text-left">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
