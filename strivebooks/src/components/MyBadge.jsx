import { Badge } from "react-bootstrap";

const MyBadge = ({ content, color }) => {
  return (
    <>
      <Badge bg="" style={{ backgroundColor: color }}>
        {content}{" "}
      </Badge>
    </>
  );
};

export default MyBadge;
