import React, { useEffect, useState } from "react";

const App = () => {
  const [qrCodeSrc, setQrCodeSrc] = useState("/assets/images/blank.jpg");

  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState();

  const qrOptions = { type: "svg", color: { dark: "#000", light: "#fff" } };

  const styles = {
    formContainer: {
      width: "500px",
      margin: "10px auto",
    },
    qrCode: {
      width: "200px",
      height: "200px",
    },
  };

  const onGenerateSrc = () => {
    const src = `https://promptpay.io/${mobileNumber}/${amount}.png`;
    setQrCodeSrc(src);
  };

  return (
    <div className="container text-center py-4">
      <img src={qrCodeSrc} className="img-fluid" style={styles.qrCode} />
      <div style={styles.formContainer}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={mobileNumber}
            onChange={(ev) => setMobileNumber(ev.target.value)}
          />
          <label>เบอร์โทรศัพท์ หรือ เลขบัตรประชาขน</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            value={amount}
            onChange={(ev) => setAmount(+ev.target.value)}
          />
          <label>จำนวนเงิน</label>
        </div>
      </div>

      <button className="btn btn-success" onClick={onGenerateSrc}>
        Submit
      </button>
    </div>
  );
};

export default App;
