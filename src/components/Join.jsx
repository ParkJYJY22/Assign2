import "./Join.css"; // Join 컴포넌트의 스타일 파일

const Join = ({ compare }) => {
  const handleSubmit = () => {
    if (compare === false) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="Join">
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
};

export default Join;
