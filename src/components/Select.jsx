import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

const CustomSelect = (props) => {
    const firstOption = props.items;

    const [job, setJob] = React.useState('');

    //選択肢が選択されたらvalueを変更する
    const handleChange = (event) => {
        setJob(event.target.value);
    };

    //選択肢をMenuItemに変換する処理
    const showMenu = () => {
        const items = [];
        for (let i = 0; i < firstOption.length; i++) {
            items.push(<MenuItem value={firstOption[i]} key={firstOption[i]}>{firstOption[i]}</MenuItem>)
        }
        return items;
    }

    return (
        <div className="">
            <InputLabel id="select-label" className='fs-6'>ドラッグしてください</InputLabel>
            <Select
                className='col-12'
                labelId="select-label"
                id="select"
                value={job}
                label="ドラッグして選択してください"
                onChange={handleChange}
            >
                {showMenu()}
            </Select>
        </div>
    );
};

export default CustomSelect;