import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth'; // Add this import
import { updateChannelData } from '../../actions/channelUser';
import './CreateEditChannel.css';

function CreateEditChannel({ setEditCreateChannelBtn }) {
  const CurrentUser = useSelector(state => state.currentUserReducer);

  const [name, setName] = useState(CurrentUser?.result?.name || '');
  const [desc, setDesc] = useState(CurrentUser?.result?.desc || '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name) {
      alert('Please enter a name!');
    } else if (!desc) {
      alert('Please enter a description!');
    } else {
      dispatch(updateChannelData(CurrentUser?.result._id, { name, desc }));
      setEditCreateChannelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser?.result.email }));
      }, 5000);
    }
  };

  return (
    <div className="container_CreateEditChannel">
      <input
        onClick={() => setEditCreateChannelBtn(false)}
        type="submit"
        name= "text"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_CreateEditChannel">
        <h1>{CurrentUser?.result?.name ? 'Edit' : 'Create'} Your Channel</h1>
        <input
          type="text"
          placeholder="Enter Your/Channel Name"
          className="ibox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          rows={15}
          placeholder="Enter Your Channel Description"
          className="ibox"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="button"
          value="Submit"
          onClick={handleSubmit}
          className="ibtn"
        />
      </div>
    </div>
  );
}

export default CreateEditChannel;
