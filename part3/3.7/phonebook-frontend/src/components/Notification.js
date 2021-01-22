import react from 'react';

const Notification = ({message}) => {
    if (message === null)
    {
      return null;
    } else if (message.success) {
      return (
        <div className="notificationSuccess">
          {message.content}
        </div>
      )
    } else {
      return (
        <div className="notificationUnSuccess">
          {message.content}
        </div>
      )
    }
  }


  export default Notification