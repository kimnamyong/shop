import React, { useState } from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState('');

  // 입력 필드 값이 변경될 때마다 상태를 업데이트
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 부모 컴포넌트로 데이터 전송
  const sendData = () => {
    sendDataToParent(inputValue); // 부모 컴포넌트로 값 전달
  };

  return (
    <div>
      <h2>자식 컴포넌트</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="부모로 보낼 데이터를 입력하세요"
      />
      <button onClick={sendData}>데이터 전송</button>
    </div>
  );
};

export default ChildComponent;