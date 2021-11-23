import React, {useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeNmae = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
      console.log('effect');
      console.log(name);
      return () => {
          console.log('clean up');
          console.log(name);
      };
  }, []);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeNmae} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
