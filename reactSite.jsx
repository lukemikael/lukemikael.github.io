function CCAndCocDisplay() {
 return (
    <div style={{ 
      width: "85vw",
      height: "40vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div className="overflow"
            style={{
              overflow: "auto",
              flex: "1 1 auto"
            }}>
          <iframe src="https://drive.google.com/file/d/1mexBgUdUl6-QtNCXg5v1OFw-Jrt1ct8Q/preview"></iframe>
         <iframe src="https://drive.google.com/file/d/1DtZ4pfROwvwlVbtzRgcAwrFG14Sasok_/preview"></iframe>
        </div>  
    </div>
  )
}

function CartAndDO (){
     return (<div style={{ 
      width: "85vw",
      height: "40vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div className="overflow"
            style={{
              overflow: "auto",
              flex: "1 1 auto"
            }}>
          <iframe src="https://drive.google.com/file/d/12Ye8t-ZhgiHRcxatFsrZMCTdge-t-LwK/preview"></iframe>
         <iframe src="https://drive.google.com/file/d/1TvqUwDJWQBMxDfGCsZ98pdmAGEz7A-dv/preview"></iframe>
        </div>  
    </div>)
}

function CartOrgInfo() {
  return (
    <div>
     <SearchBox /> 

     <div>&nbsp;</div>

  <div className="container-fluid">
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOrganizationalInfo" aria-expanded="false" aria-controls="collapseOrganizationalInfo">
        Organizational Info
    </button>
    <div className="collapse" id="collapseOrganizationalInfo">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Email</th>
              <td>xinfo@immigration.gov.ph</td>
            </tr>
            <tr>
              <th scope="row">Contact Number</th>
              <td>0916 343 3434</td>
            </tr>
            <tr>
              <th scope="row">Agency Head</th>
              <td>Agency Head: Atty. Norman G.Tansingco</td>
            </tr>
            <tr>
              <th scope="row">Designation</th>
              <td>Commissioner of the Bureau of Immigration</td>
            </tr>
            <tr>
              <th scope="row">Residing Region</th>
              <td>National Capital Region (NCR)</td>
            </tr>
            <tr>
              <th scope="row">Province</th>
              <td>Metro Manila</td>
            </tr>
            <tr>
              <th scope="row">District</th>
              <td>Manila, 1st-6th Districts</td>
            </tr>
            <tr>
              <th scope="row">City</th>
              <td>Manila</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>Magallanes Drive. Intramuros, 1002 Manila</td>
            </tr>       
          </tbody>
        </table>
    </div>
    </div>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#cartInformation" aria-expanded="false" aria-controls="collapseCartInformation">
        Cart Information
    </button>
    <div className="collapse" id="cartInformation">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">CART Email</th>
              <td>xinfo@immigration.gov.ph</td>
            </tr>
            <tr>
              <th scope="row">CART Contact #</th>
              <td>0916 343 3434</td>
            </tr>
            <tr>
              <th scope="row">CART Head/Focal Person</th>
              <td>Agency Head: Atty. Norman G.Tansingco</td>
            </tr>
            <tr>
              <th scope="row">CART Type</th>
              <td>Commissioner of the Bureau of Immigration</td>
            </tr>
            <tr>
              <th scope="row">CART Order</th>
              <td>National Capital Region (NCR)</td>
            </tr>
          </tbody>
        </table>
    </div>

    <div>&nbsp;</div>
</div>
  )
}

function SearchBox(functionThatSendsInfoBack) {
  const [searchTerm, setSearchTerm] = React.useState('');
  React.useEffect(() => {
   console.log("change search term");
  }, [searchTerm]);

  return (
    <div className="container-fluid">
        <div>&nbsp;</div>
        <h1>Compliance Matrix Dashboard</h1>
        <div className="input-group">
           <input 
            type="text"
            className="form-control"
            placeholder="enter keywords such as bir central office, PCO, fda"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
      </div>
    );
}

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""};
  }

  componentDidMount() {
    this.setState({input: ""});

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <CartOrgInfo />
        <h1>Citizen's Charter and Certificate of Compliance</h1>
        <CCAndCocDisplay />
        <h1>Cart DO and Cart Directory</h1>
        <CartAndDO />
      </div>
    )
  }
}

const container = document.getElementById('reactRoot');
const root = ReactDOM.createRoot(container);
root.render(<Base />);
