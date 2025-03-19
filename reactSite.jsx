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
          <iframe src="https://drive.google.com/file/d/12Ye8t-ZhgiHRcxatFsrZMCTdge-t-LwK/preview"></iframe>
         <iframe src="https://drive.google.com/file/d/1TvqUwDJWQBMxDfGCsZ98pdmAGEz7A-dv/preview"></iframe>
        </div>  
    </div>
}

function SearchBox() {
  return <h1></h1>;
}
     
function Base() {
  return (
   <div>
      <h1>Citizen's Charter and Certificate of Compliance</h1>
        <CCAndCocDisplay />
    <h1>Cart DO and Cart Directory</h1>
        <CartAndDO />
      </div>
    )
}

const container = document.getElementById('reactRoot');
const root = ReactDOM.createRoot(container);
root.render(<Base />);
