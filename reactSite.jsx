function CCAndCocDisplay() {
 return (
    <p style={{ 
      width: "85vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      right: 0,
      display: "flex",
      flexDirection: "column"
    }}>
        <div class="overflow"
            style={{
              overflow: "auto",
              flex: "1 1 auto"
            }}>
          
        </div>  
    </p>
  )
}

function SearchBox() {
  return <h1></h1>;
}
     
function Base() {
  return (
   <div>
      <h1>Citizen's Charter and Certificate of Compliance</h1>
        <CCAndCocDisplay />
      </div>
    )
}

const container = document.getElementById('reactRoot');
const root = ReactDOM.createRoot(container);
root.render(<Base />);