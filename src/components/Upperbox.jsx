import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faUser, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import "./Upperbox.css";

const Upperbox = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
    setIsChecked(!isChecked);
    };

    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return <div className='Upper'>
        
        <div className='Checkbox'>
            <span>실명 인증된 아이디로 가입</span>
            <FontAwesomeIcon 
                className='CCheck'
                icon={faCircleCheck} 
                onClick={handleClick} 
                style={{ color: isChecked 
                        ? '#2bb400' : 'gray',
                        cursor: 'pointer' }} 
            />
        </div>
        
        <div className='Box1'>
            <div className='Id'>
            <FontAwesomeIcon className='user' icon={faUser}/>
            <input placeholder='아이디' type={"faUser"}/>
            <h4>@naver.com</h4>
            </div>

            <div className='Pw'>
            <FontAwesomeIcon className='lock' icon={faUnlockKeyhole}/>
            <input
                placeholder='비밀번호'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
            className='eye'
            style={{color:'gray'}}
            icon={showPassword ? faEye : faEyeSlash}
            onClick={togglePasswordVisibility}
            />
            </div>
        
            <div className='PwRe'>
            <FontAwesomeIcon className='lock' icon={faUnlockKeyhole}/>
            <input
                placeholder='비밀번호확인'
                type={showPassword ? 'text' : 'password'}
                value={passwordRe}
                onChange={(e) => setPasswordRe(e.target.value)}
            />
            </div>
        </div>
    </div>
}

export default Upperbox;