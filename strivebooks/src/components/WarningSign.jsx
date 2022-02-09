import { Alert } from "react-bootstrap";

const WarningSing = ({ content }) => {
  return (
    <>
      <Alert variant="danger">{content}</Alert>
    </>
  );
};

export default WarningSing;
