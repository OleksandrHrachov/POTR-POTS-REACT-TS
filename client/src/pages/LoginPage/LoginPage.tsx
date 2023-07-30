import React, { FC, useContext, useState } from 'react';
import './LoginPage.scss';
import { joinClassNames } from '../../helpers/joinClassNames';
import { FormInput } from '../../components/shared/FormInput.ts';
import { Formik, Form } from 'formik';
import { logInValidationSchema } from './helper';
import { Button, buttonVariant } from '../../components/shared/Button';
import { MutatingDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE_ROUTE, REGISTRATION_PAGE_ROUTE } from '../../consts/consts';
import { StoreContext } from '../..';
import { InternalLink } from '../../components/shared/InternalLink';
import { login } from '../../http/userApi';
import { observer } from 'mobx-react';

interface IInitValue {
  email: string;
  password: string;
}

export const LoginPage: FC = observer(() => {
  const navigate = useNavigate();
  const { navigationStore, userStore } = useContext(StoreContext);
  const [isNotRegistered, setIsNotRegistered] = useState(false);

  const onCancelRegistration = () => {
    navigate(HOME_PAGE_ROUTE);
    navigationStore.setCurrentRoute(HOME_PAGE_ROUTE);
  };

  const initValue: IInitValue = {
    email: '',
    password: '',
  };

  return (
    <div className={'login'}>
      <div className={joinClassNames(['container', 'login__container'])}>
        <div className={'login__form'}>
          <div className={'login__form-header'}>
            <p>LOG IN FORM</p>
            <Button
              variant={buttonVariant.CLOSE}
              onClick={onCancelRegistration}
            />
          </div>
          <Formik
            initialValues={initValue}
            validationSchema={logInValidationSchema}
            onSubmit={async (values, actions) => {
              setIsNotRegistered(false);
              try {
                const response = await login(values.email, values.password);

                if (response) {
                  if (response.userData) {
                    const { id, email, firstName, lastName } =
                      response.userData;

                    userStore.setUser(id, email, firstName, lastName);
                    userStore.setIsAuth(true);
                    actions.resetForm();
                  } else if (response.message === 'User not registered') {
                    setIsNotRegistered(true);
                  }
                }
              } catch (error) {
                console.log('login error =>', error);
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
                  <div className="login__form-footer">
                    <Button
                      title="Submit"
                      type="submit"
                      variant={buttonVariant.SUBMIT}
                      isDisabled={isSubmitting}
                      className="login__submit-btn"
                    />
                    {isNotRegistered && (
                      <div className={'login__form-message'}>
                        <p>
                          This user is not registered, please register{' '}
                          <InternalLink
                            to={REGISTRATION_PAGE_ROUTE}
                            className="login__form-link"
                          >
                            REGISTRATION
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
                      wrapperClass="login__form-loader"
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
