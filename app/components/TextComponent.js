import React from 'react';
export const Text = ({ label, input }) => {
  return (
    <div>
      <div>
        {label}
      </div>
      <div>
        <input {...input} placeholder={label} type="text" className="textcontainer" />
      </div>
    </div>
  );
}

export default Text;
