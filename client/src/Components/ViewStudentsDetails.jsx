import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import '../ListMarks.css'; // Import CSS file



function VeiwGroupDetails() {
    return (

        <Container className ="table-container">
         
            <Card className='card-container'>
            <h1>Student Deatils</h1>
              <div style={{display:'flex'}}>
            <Card border="primary" className="groupcard"  style={{ width: '18rem' }}>
                <Card.Header>studentID</Card.Header>
                <Card.Body>
                  <ul>
                    <li>It21322662</li>
                    <li>It21322663</li>
                    <li>It21322664</li>
                    <li>It21322665</li>
                  </ul>
                </Card.Body>
            </Card>
            
            <Card border="primary" className="groupcard"  style={{ width: '18rem' }}>
                <Card.Header>student Name</Card.Header>
                <Card.Body>
                  <ul>
                    <li>Perera</li>
                    <li>Sonal</li>
                    <li>Senalith</li>
                    <li>Wasath</li>
                  </ul>
                </Card.Body>
            </Card>
            </div>
            <button className="btn btn-primary" >Add Marks</button>
            </Card>
       
        </Container>
    );
}

export default VeiwGroupDetails;