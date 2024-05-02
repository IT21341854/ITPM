import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import '../ListMarks.css'; // Import CSS file



function Viewgroupno() {
    return (

        <Container className ="table-container">
            <Card border="primary" className="groupcard"  style={{ width: '18rem' }}>
                <Card.Header>Group No</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Primary Card Title</Card.Title> */}
                    <Card.Text>
                    GROUP NUMBER 01
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card border="primary"  className="groupcard" style={{ width: '18rem' }}>
                <Card.Header>Group No</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Primary Card Title</Card.Title> */}
                    <Card.Text>
                    GROUP NUMBER 02
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card border="primary"  className="groupcard" style={{ width: '18rem' }}>
                <Card.Header>Group No</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Primary Card Title</Card.Title> */}
                    <Card.Text>
                    GROUP NUMBER 03
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card border="primary"  className="groupcard" style={{ width: '18rem' }}>
                <Card.Header>Group No</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Primary Card Title</Card.Title> */}
                    <Card.Text>
                       GROUP NUMBER 04
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default Viewgroupno;