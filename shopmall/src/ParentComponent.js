import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // 부모 컴포넌트에서 상태를 관리
  const [dataFromChild, setDataFromChild] = useState('');

  // 자식 컴포넌트로부터 데이터를 수신하는 함수
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log('자식 컴포넌트로부터 받은 데이터:', data);
  };

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <p>자식 컴포넌트로부터 받은 데이터: {dataFromChild}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;