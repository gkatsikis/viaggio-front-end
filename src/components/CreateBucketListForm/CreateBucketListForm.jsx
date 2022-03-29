import React, { useState, useEffect } from 'react';
import { create } from '../../services/bucketlistService'

const CreateBucketListForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    season: '',
    todo: '',
    fulfilled: false,
  })


  return (  
    <>
    <h1>Add to Bucket List</h1>
    <form autocomplete="off">
      <div> Location:
        <label htmlFor="item-input"
        className='item-label'>
        </label>
        <input type="text" 
        className='item-form'
        value={formData.location}
        required
        />
      </div>

    </form>
    </>
  );
}

export default CreateBucketListForm;