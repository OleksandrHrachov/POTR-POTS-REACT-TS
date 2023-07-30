import React, { FC, useContext, useState } from 'react';
import './RegistrationPage.scss';
import { joinClassNames } from '../../helpers/joinClassNames';
import { FormInput } from '../../components/shared/FormInput.ts';
import { Formik, Form } from 'formik';
import { registrationValidationSchema } from './helper';
import { Button, buttonVariant } from '../../components/shared/Button';
import { MutatingDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from '../../consts/consts';
import { StoreContext } from '../..';
import { InternalLink } from '../../components/shared/InternalLink';
import { registration } from '../../http/userApi';
import { observer } from 'mobx-react';

interface IInitValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegistrationPage: FC = observer(() => {
  const navigate = useNavigate();
  const { navigationStore, userStore } = useContext(StoreContext);
  const [isExistEmail, setIsExistEmail] = useState(false);

  const onCancelRegistration = () => {
    navigate(HOME_PAGE_ROUTE);
    navigationStore.setCurrentRoute(HOME_PAGE_ROUTE);
  };

  const initValue: IInitValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <div className={'registration'}>
      <div className={joinClassNames(['container', 'registration__container'])}>
        <div className={'registration__form'}>
          <div className={'registration__form-header'}>
            <p>REGISTRATION FORM</p>
            <Button
              variant={buttonVariant.CLOSE}
              onClick={onCancelRegistration}
            />
          </div>
          <Formik
            initialValues={initValue}
            validationSchema={registrationValidationSchema}
            onSubmit={async (values, actions) => {
              setIsExistEmail(false);
              try {
                const response = await registration(
                  values.email,
                  values.password,
                  values.firstName,
                  values.lastName
                );

                if (response) {
                  if (response.userData) {
                    const { id, email, firstName, lastName } =
                      response.userData;

                    userStore.setUser(id, email, firstName, lastName);
                    userStore.setIsAuth(true);
                    actions.resetForm();
                  } else if (response.message === 'Email already exist') {
                    setIsExistEmail(true);
                  }
                }
              } catch (error) {
                console.log('registration error =>', error);
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldTouched,
              isSubmitting,
            }) => {
              return (
                <Form>
                  <FormInput
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={setFieldTouched}
                    fieldTouched={touched.firstName}
                    fieldError={errors.firstName}
                  />
                  <FormInput
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={setFieldTouched}
                    fieldTouched={touched.lastName}
                    fieldError={errors.lastName}
                  />
                  <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={setFieldTouched}
                    fieldTouched={touched.email}
                    fieldError={errors.email}
                  />
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={setFieldTouched}
                    fieldTouched={touched.password}
                    fieldError={errors.password}
                  />
                  <div className="registration__form-footer">
                    <Button
                      title="Submit"
                      type="submit"
                      variant={buttonVariant.SUBMIT}
                      isDisabled={isSubmitting}
                      className="registration__submit-btn"
                    />
                    {isExistEmail && (
                      <div className={'registration__form-message'}>
                        <p>
                          This email is already registered, please try to{' '}
                          <InternalLink
                            to={LOGIN_PAGE_ROUTE}
                            className="registration__form-link"
                          >
                            LOG IN
                          </InternalLink>
                        </p>
                      </div>
                    )}
                  </div>
                  {isSubmitting && (
                    <MutatingDots
                      height="100"
                      width="100"
                      color="var(--color-turquoise)"
                      secondaryColor="var(--color-yellow-light"
                      radius="12.5"
                      ariaLabel="mutating-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass="registration__form-loader"
                      visible={true}
                    />
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
});
