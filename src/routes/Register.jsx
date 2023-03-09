import React from 'react';
import { Link } from "react-router-dom";

import TextInput from './../components/TextInput';
import Select from './../components/Select';
import ProfileImg from "./../assets/default.jpeg";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'


const Register = () => {
    //登録ページのタイトル
    const registerTitle = [
        "新規登録",
        "情報登録",
        "情報登録",
        "情報登録",
        "情報登録",
    ];

    //ボタンのテキスト
    const btnLabel = [
        "ReferMeに登録",
        "この情報で登録1",
        "この情報で登録2",
        "この情報で登録3",
        "この情報で登録4",
    ];

    //職業の質問の選択肢
    const firstOption = [
        "医師",
        "コンサルタント",
        "教員",
        "会社員",
        "学生",
        "その他",
    ];

    const [registerState, setState] = React.useState(0);

    //ボタンを押したとき、regiterStateを変更してコンポーネントを入れ替える処理
    const handleState = () => {
        if (registerState === 0) {
            let mailAddress = document.getElementById('mailAddress');
            console.log(mailAddress.value);
        }
        setState(registerState + 1);
    }

    return (
        <div className="bg-gray lead">
            <div className="container col-10 col-sm-10 col-md-6 col-lg-4 m-auto text-center bg-white">
                <h1 className='text-center fw-bold register-title'>{registerTitle[registerState]}</h1>
                {registerState === 0 &&
                    <div className="">

                        <div className="mt-2 d-flex justify-content-around align-items-center flex-column">
                            <div className="col-12 my-2 align-items-center">
                                <TextInput id="mailAddress" placeholder={'メールアドレス'} type="search" text={'Hello World'} />
                            </div>
                            <div className="col-12 my-2 align-items-center">
                                <TextInput id="password" className="" placeholder={'パスワード'} type="password" text={'Hello World'} />
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className='register-btn fs-6' onClick={() => { handleState() }}>{btnLabel[registerState]}</button>
                        </div>
                    </div>
                }

                {registerState === 1 &&
                    <div className="mt-2">
                        <input type="file" className='d-none' id='profileImg' />
                        <label htmlFor="profileImg">
                            <img src={ProfileImg} className="register-img" alt="アイコン" />
                        </label>
                        <div className="text-start fw-bold">名前</div>
                        <div className="col-12 my-2 d-flex align-items-center">
                            <div className="mx-2">
                                <TextInput placeholder={'姓'} type="search" />
                            </div>
                            <div className="mx-2">
                                <TextInput placeholder={'名'} type="search" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className='register-btn fs-6' onClick={() => { handleState() }}>{btnLabel[registerState]}</button>
                        </div>
                    </div>
                }

                {registerState === 2 &&
                    <div className="mt-2">
                        <div className="text-start fw-bold">職種</div>
                        <div className="col-12 my-2 d-flex align-items-center">
                            <div className="mx-2">
                                <Select items={firstOption} key={firstOption} />
                            </div>
                        </div>
                        <Link to="/"></Link>
                    </div>
                }

                <div className="my-5">
                    <Link to="/login" className='text-secondary text-decoration-none fs-6'>ログインページに移動</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;