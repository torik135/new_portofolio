const Toast = ({ text }) => {
  return (
    <div className='toast'>
      <div className='toast_content'>{text}</div>
    </div>
  );
};

export { Toast };
