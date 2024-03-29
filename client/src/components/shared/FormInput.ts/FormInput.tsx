import React, { FC, useState } from 'react';
import { joinClassNames } from '../../../helpers/joinClassNames';
import showIcon from '../../../images/show_icon.svg';
import hideIcon from '../../../images/hide_icon.svg';
import './FormInput.scss';

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (
    fieldName: string,
    touched: boolean,
    shouldValidate: boolean
  ) => void;
  fieldTouched: boolean | undefined;
  fieldError: string | undefined;
}

export const FormInput: FC<IProps> = ({
  type,
  name,
  placeholder,
  value,
  className,
  onChange,
  onBlur,
  fieldTouched,
  fieldError,
}) => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={'form-input'}>
      {type === 'password' && (
        <img className="icon icon-password" src={showPassword? showIcon : hideIcon} alt="twitter-icon" onClick={() => setShowPassword(!showPassword)}/>
      )}
      <input
        value={value}
        type={showPassword? 'text' : type}
        name={name}
        placeholder={placeholder}
        className={joinClassNames([
          'form-input__field',
          fieldTouched &&
            (value === '' || fieldError) &&
            'form-input__field--error',
          className,
        ])}
        onChange={onChange}
        onBlur={() => onBlur(name, true, true)}
      />
      <p className="form-input__error-message">{fieldTouched && fieldError}</p>
    </div>
  );
};
