import Card from 'react-bootstrap/Card';

function AchievementCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
            {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;