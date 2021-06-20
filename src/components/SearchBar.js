import React, {useState} from 'react';
const SearchBar = ({submit}) =>{
    const [val, setVal] = useState('');
    const formSubmitted = (e) =>{
        e.preventDefault();
        submit(val)
    }

    return (
        <div className="ui segment">
            <form onSubmit={formSubmitted} className="ui form">
                <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
            </form>
        </div>
    )
}
export default SearchBar;